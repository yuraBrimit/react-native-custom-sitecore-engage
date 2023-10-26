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
exports.createCookie = exports.getCookieValue = exports.cookieExists =void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.

const get_browser_id_from_cdp_1 = require("../utils/get-browser-id-from-cdp");
const {getAppStore} = require("../utils/init-appstore");
/**
 * Gets the value for a given cookie name
 * @param cookieName - The cookie name to be found
 * @returns - The value of the cookie if it exists or empty string
 */
function getCookieValue(cookieName) {
   // TODO: inject app storage
    const appStore = getAppStore();
   return appStore.browserId;
}
exports.getCookieValue = getCookieValue;
/**
 * @param targetURL - The targetURL from global settings
 * @param clientKey - The clientKey from global settings
 * @param settings - The ICookieSettings settings object
 * @returns - browserId or undefined on error
 */
function createCookie(targetURL, clientKey, settings) {
    return __awaiter(this, void 0, void 0, function* () {
        const browserId = yield (0, get_browser_id_from_cdp_1.getBrowserIdFromCdp)(targetURL, clientKey);

		// TODO: inject app storage
        const appStore = getAppStore();
        appStore.setBrowserId(browserId);

        return browserId;
    });
}
exports.createCookie = createCookie;

function cookieExists(cookieName) {
   // TODO: inject app storage
    const appStore = getAppStore();
   return !!appStore.browserId;
}
exports.cookieExists = cookieExists;
