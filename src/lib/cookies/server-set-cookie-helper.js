"use strict";
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieServerSide = exports.cookieExistsInServerSide = void 0;
const cookie_utils_1 = require("../utils/cookies/cookie-utils");
/**
 * Evaluates whether a specified cookie name exists in the request header
 * @param cookiesHeader - The cookie string of the request header
 * @param cookieName - The cookie name to be found
 * @returns - A boolean value if cookie exists
 */
function cookieExistsInServerSide(cookiesHeader, cookieName) {
    return false;
}
exports.cookieExistsInServerSide = cookieExistsInServerSide;
/**
 * Retrieves the cookie name and value from the request header
 * @param cookiesHeader - The cookie string of the request header
 * @param cookieName - The cookie name to be found
 * @returns - The name and value of the cookie, or undefined
 */
function getCookieServerSide(cookiesHeader, cookieName) {
    return (0, cookie_utils_1.getCookie)(cookiesHeader, cookieName);
}
exports.getCookieServerSide = getCookieServerSide;
