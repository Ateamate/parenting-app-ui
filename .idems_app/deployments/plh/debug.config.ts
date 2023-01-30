import { extendDeploymentConfig } from "scripts";
import { SKINS } from "./skins";

/** Debug config extends the global config **/
const config = extendDeploymentConfig({ name: "debug", parent: "plh_global" });

config.name = "plh_debug";

// Override constants
config.app_config.APP_SKINS.defaultSkinName = SKINS.debug.name;
// Limit available skins to only include debug skin, to force this skin to be applied on init
config.app_config.APP_SKINS.available = [SKINS.debug];

export default config;
