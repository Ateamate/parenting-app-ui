'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">frontend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"contributing.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CONTRIBUTING\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/AccordionSectionComponent.html\" data-type=\"entity-link\" >AccordionSectionComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/AnimatedSectionComponent.html\" data-type=\"entity-link\" >AnimatedSectionComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/AnimatedSectionGroupComponent.html\" data-type=\"entity-link\" >AnimatedSectionGroupComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/ComboBoxModalComponent.html\" data-type=\"entity-link\" >ComboBoxModalComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/FormComponent.html\" data-type=\"entity-link\" >FormComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/NavGroupComponent.html\" data-type=\"entity-link\" >NavGroupComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/RoundIconButtonComponent.html\" data-type=\"entity-link\" >RoundIconButtonComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/SelectTextComponent.html\" data-type=\"entity-link\" >SelectTextComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/SquareIconButtonComponent.html\" data-type=\"entity-link\" >SquareIconButtonComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TemplateBaseComponent.html\" data-type=\"entity-link\" >TemplateBaseComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TemplateDebuggerComponent.html\" data-type=\"entity-link\" >TemplateDebuggerComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TemplateHTMLComponent.html\" data-type=\"entity-link\" >TemplateHTMLComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TemplateLayoutComponent.html\" data-type=\"entity-link\" >TemplateLayoutComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TemplatePopupComponent.html\" data-type=\"entity-link\" >TemplatePopupComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplAccordionComponent.html\" data-type=\"entity-link\" >TmplAccordionComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplAdvancedDashedBoxComponent.html\" data-type=\"entity-link\" >TmplAdvancedDashedBoxComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplAnimatedSlidesComponent.html\" data-type=\"entity-link\" >TmplAnimatedSlidesComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplAudioComponent.html\" data-type=\"entity-link\" >TmplAudioComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplButtonComponent.html\" data-type=\"entity-link\" >TmplButtonComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplCarouselComponent.html\" data-type=\"entity-link\" >TmplCarouselComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplComboBoxComponent.html\" data-type=\"entity-link\" >TmplComboBoxComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplDashedBoxComponent.html\" data-type=\"entity-link\" >TmplDashedBoxComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplDisplayGroupComponent.html\" data-type=\"entity-link\" >TmplDisplayGroupComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplDrawerComponent.html\" data-type=\"entity-link\" >TmplDrawerComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplHelpIconComponent.html\" data-type=\"entity-link\" >TmplHelpIconComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplIconBannerComponent.html\" data-type=\"entity-link\" >TmplIconBannerComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplImageComponent.html\" data-type=\"entity-link\" >TmplImageComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplLatexComponent.html\" data-type=\"entity-link\" >TmplLatexComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplLottieAnimation.html\" data-type=\"entity-link\" >TmplLottieAnimation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplNavigationBarComponent.html\" data-type=\"entity-link\" >TmplNavigationBarComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplNumberComponent.html\" data-type=\"entity-link\" >TmplNumberComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplParentPointBoxComponent.html\" data-type=\"entity-link\" >TmplParentPointBoxComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplParentPointCounterComponent.html\" data-type=\"entity-link\" >TmplParentPointCounterComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplQRCodeComponent.html\" data-type=\"entity-link\" >TmplQRCodeComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplRadioGroupComponent.html\" data-type=\"entity-link\" >TmplRadioGroupComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplSimpleCheckboxComponent.html\" data-type=\"entity-link\" >TmplSimpleCheckboxComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplSliderComponent.html\" data-type=\"entity-link\" >TmplSliderComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplSubtitleComponent.html\" data-type=\"entity-link\" >TmplSubtitleComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTaskCardComponent.html\" data-type=\"entity-link\" >TmplTaskCardComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTaskProgressBarComponent.html\" data-type=\"entity-link\" >TmplTaskProgressBarComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTextAreaComponent.html\" data-type=\"entity-link\" >TmplTextAreaComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTextBoxComponent.html\" data-type=\"entity-link\" >TmplTextBoxComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTextComponent.html\" data-type=\"entity-link\" >TmplTextComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTileComponent.html\" data-type=\"entity-link\" >TmplTileComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTimerComponent.html\" data-type=\"entity-link\" >TmplTimerComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplTitleComponent.html\" data-type=\"entity-link\" >TmplTitleComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplToggleBarComponent.html\" data-type=\"entity-link\" >TmplToggleBarComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/TmplVideoComponent.html\" data-type=\"entity-link\" >TmplVideoComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/WorkshopsComponent.html\" data-type=\"entity-link\" >WorkshopsComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/PausedState.html\" data-type=\"entity-link\" >PausedState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PlayingState.html\" data-type=\"entity-link\" >PlayingState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/State.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AnswerBody.html\" data-type=\"entity-link\" >AnswerBody</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IButton.html\" data-type=\"entity-link\" >IButton</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IButton-1.html\" data-type=\"entity-link\" >IButton</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ICategoryList.html\" data-type=\"entity-link\" >ICategoryList</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITemplatePopupComponentProps.html\" data-type=\"entity-link\" >ITemplatePopupComponentProps</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TimerState.html\" data-type=\"entity-link\" >TimerState</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));