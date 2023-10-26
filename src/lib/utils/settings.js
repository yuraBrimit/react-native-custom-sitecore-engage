"use strict";
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSettings = exports.createSettings = void 0;
const consts_1 = require("./consts");
/**
 * Creates the global settings object, to be used by the library
 * @param settings - Global settings added by the developer.
 * @returns an ISettingsObject with the settings added by the developer
 */
function createSettings(settings) {
    validateSettings(settings);
    const { clientKey, targetURL, cookieDomain, cookiePath, cookieExpiryDays, forceServerCookieMode, includeUTMParameters, } = settings;
    return {
        clientKey: clientKey,
        cookieSettings: {
            cookieDomain,
            cookieExpiryDays: cookieExpiryDays || consts_1.DEFAULT_COOKIE_EXPIRY_DAYS,
            cookieName: `BID_${clientKey}`,
            cookiePath: cookiePath || '/',
            forceServerCookieMode: forceServerCookieMode !== null && forceServerCookieMode !== void 0 ? forceServerCookieMode : false,
        },
        includeUTMParameters: includeUTMParameters !== null && includeUTMParameters !== void 0 ? includeUTMParameters : true,
        targetURL: targetURL,
    };
}
exports.createSettings = createSettings;
/**
 * A validation function for the required global settings
 */
function validateSettings(settings) {
    const { clientKey, targetURL } = settings;
    if (!clientKey)
        throw new Error(`[MV-0001] "clientKey" is required.`);
    if (!targetURL)
        throw new Error(`[MV-0002] "targetURL" is required.`);
    try {
        new URL(targetURL);
    }
    catch (e) {
        throw new Error(`[IV-0001] Incorrect value for "targetURL". Set the value to a valid URL string.`);
    }
}
exports.validateSettings = validateSettings;
