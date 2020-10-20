import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, of, forkJoin, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatMessage } from '../chat-msg.model';
import { ChatService } from '../chat.service';
import { ChatTrigger, triggersByPhrase } from '../chat.triggers';
import { RapidProOfflineFlow } from './chat.flow';
import { RapidProFlowExport } from './rapid-pro-export.model';

export type FlowStatusChange = {
  flowId: string;
  status: "start" | "completed" | "expired";
}

@Injectable({
  providedIn: 'root'
})
export class OfflineChatService implements ChatService {

  private inflightRequests: Observable<any>[] = [];
  private flowsById: { [flowId: string]: RapidProOfflineFlow } = {};
  private contactFields: { [field: string]: string } = {};
  private currentFlow: RapidProOfflineFlow;

  public messages$: BehaviorSubject<ChatMessage[]>;
  private flowStatus$: BehaviorSubject<FlowStatusChange[]>;

  constructor(
    protected http: HttpClient,
  ) {
    this.messages$ = new BehaviorSubject([]);
    this.flowStatus$ = new BehaviorSubject([]);
    this.flowStatus$.subscribe((events) => {
      if (events.length > 0) {
        let latest = events[events.length - 1];
        if (latest.status === "start") {
          this.currentFlow = this.flowsById[latest.flowId];
        }
      }
    });
  }

  public init() {
    return this.loadExportFile("assets/rapid-pro-flow-exports/idems-plh-app_1.json")
  }

  public runTrigger(trigger: ChatTrigger) {
    return this.flowsLoaded().pipe(map(() => {
      let flowNameToStart = triggersByPhrase.get(trigger.phrase).flowNameToStart;
      if (flowNameToStart) {
        this.startFlowByName(flowNameToStart);
      }
    }))
  }

  public startFlowByName(flowName: string) {
    // Start by publishing flow status change event
    let initFlowId = Object.keys(this.flowsById).find((id) => this.flowsById[id].name.indexOf(flowName) > -1);
    console.log("flow name ", flowName, " flow id", initFlowId);
    if (!initFlowId) {
      initFlowId = Object.keys(this.flowsById)[0];
    }
    this.flowStatus$.next([
      {
        flowId: initFlowId,
        status: "start"
      }
    ]);
  }

  public startFlowById(flowId: string) {
    this.flowStatus$.next([
      {
        flowId: flowId,
        status: "start"
      }
    ]);
  }

  public sendMessage(message: ChatMessage): Observable<any> {
    return this.flowsLoaded().pipe(map(() => this.currentFlow.sendMessage(message)));
  }

  public loadExportFile(exportFileUrl: string): Observable<RapidProFlowExport.RootObject> {
    let request = this.http.get(exportFileUrl).pipe(map((res: RapidProFlowExport.RootObject) => {
      if (res.flows && res.flows.length > 0) {
        for (let flow of res.flows) {
          this.flowsById[flow.uuid] = new RapidProOfflineFlow(
            flow,
            this.messages$,
            this.flowStatus$,
            this.contactFields
          );
        }
      } else {
        console.warn("No flows in export file ", exportFileUrl);
      }
      this.inflightRequests = this.inflightRequests.filter((req) => req === request);
      return res;
    }));
    this.inflightRequests.push(request);
    return request;
  }

  public getFlowById(flowId: string): Observable<RapidProOfflineFlow> {
    if (this.flowsById[flowId]) {
      return of(this.flowsById[flowId]);
    } else {
      if (this.inflightRequests.length > 0) {
        return forkJoin(this.inflightRequests).pipe(map((results) => {
          return this.flowsById[flowId];
        }));
      } else {
        return throwError("No flow found for id " + flowId);
      }
    }
  }

  private flowsLoaded(): Observable<any> {
    if (Object.keys(this.flowsById).length < 1) {
      if (this.inflightRequests.length > 0) {
        return forkJoin(this.inflightRequests)
      } else {
        return throwError("No flow exports loaded");
      }
    } else {
      return of({});
    }
  }

}
