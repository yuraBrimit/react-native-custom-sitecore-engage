"use strict";
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
/* eslint-disable multiline-comment-style */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isISODateString = exports.isShortISODateString = void 0;
/**
 * Checks if the provided string is a shortened version of ISO 8601 date format ‘YYYY-MM-DD’T’hh:mm’
 * @param date - The date string provided by the developer
 * @returns - A boolean if the string is valid otherwise false
 */
function isShortISODateString(date) {
    try {
        const dateString = date + 'Z';
        const convertedDate = new Date(dateString).toISOString().substring(0, 16);
        if (convertedDate !== date)
            return false;
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.isShortISODateString = isShortISODateString;
/**
 * Evaluates if the provided string is the long version of ISO 8601 date format ‘YYYY-MM-DD’T’hh:mm:ss.sssZ’
 * @param date - The date string provided by the developer
 * @returns - A boolean if the strign is valid, otherwise false
 */
function isISODateString(date) {
    try {
        const convertedDate = new Date(date).toISOString();
        return convertedDate === date;
    }
    catch (_) {
        return false;
    }
}
exports.isISODateString = isISODateString;
