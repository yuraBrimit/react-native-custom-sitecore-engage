"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEventUrl = exports.generateCreateBrowserIdUrl = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("./consts");
/**
 * Creates the URL for retrieving the browser ID from Sitecore CDP
 * @param targetURL - From global settings
 * @param clientKey - From global settings
 * @returns The URL string for retrieving the browser ID
 */
function generateCreateBrowserIdUrl(targetURL, clientKey) {
    // eslint-disable-next-line max-len
    return `${targetURL}/${consts_1.API_VERSION}/${consts_1.EndPoint.Browser}/create.json?client_key=${clientKey}&message={}`;
}
exports.generateCreateBrowserIdUrl = generateCreateBrowserIdUrl;
/**
 * Creates the URL for sending events to Sitecore CDP
 * @param targetURL - From global settings
 * @returns The URL string for sending events
 */
function generateEventUrl(targetURL) {
    return `${targetURL}/${consts_1.API_VERSION}/${consts_1.EndPoint.Events}`;
}
exports.generateEventUrl = generateEventUrl;
