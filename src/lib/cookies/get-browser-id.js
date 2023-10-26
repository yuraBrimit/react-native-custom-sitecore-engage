"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserId = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const browser_cookie_handler_1 = require("./browser-cookie-handler");
/**
 * Get the browser ID from the cookie
 * @param cookieName - The cookie name from global settings
 * @returns The browser ID if the cookie exists
 */
function getBrowserId(cookieName) {
    return (0, browser_cookie_handler_1.getCookieValue)(cookieName);
}
exports.getBrowserId = getBrowserId;
