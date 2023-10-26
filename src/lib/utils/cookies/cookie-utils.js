"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultCookieAttributes  = exports.getCookie = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("../consts");
const interfaces_1 = require("../interfaces");
/**
 * Retrieves the cookie, if it exists in the cookie string
 * @param cookieStr - The cookie string containing every cookie
 * @param cookieName - The cookie name to be found
 * @returns - an object that contains the cookie name and value or undefined, if not found
 */
function getCookie(cookieStr, cookieName) {
    if (!cookieStr)
        return undefined;
    const found = cookieStr.split('; ').find((cookie) => {
        return cookie.indexOf('=') > 0 && cookie.split('=')[0] === cookieName;
    });
    return found !== undefined ? { name: found.split('=')[0], value: found.split('=')[1] } : undefined;
}
exports.getCookie = getCookie;


