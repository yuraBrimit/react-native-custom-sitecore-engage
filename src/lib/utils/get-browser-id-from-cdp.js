"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserIdFromCdp = void 0;
const url_builder_1 = require("./url-builder");
/**
 * Gets the browser ID from Sitecore CDP
 * @param targetURL - From global settings
 * @param clientKey - From global settings
 * @returns the browser ID
 */
function getBrowserIdFromCdp(targetURL, clientKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch((0, url_builder_1.generateCreateBrowserIdUrl)(targetURL, clientKey));
        const { ref } = yield response.json();
        return ref;
    });
}
exports.getBrowserIdFromCdp = getBrowserIdFromCdp;
