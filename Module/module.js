// Module: Import / Export
import logger from "./logger/index.js";
// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";
import * as constants from "./constants.js";

console.log(logger("hello word", constants.TYPE_WARN));
console.log(constants);
