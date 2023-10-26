"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
/**
 *
 * @param email - the email string to be validated
 * @returns - a boolean value depending on whether the email value passed is valid
 */
function isValidEmail(email) {
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regx.test(email);
}
exports.isValidEmail = isValidEmail;
