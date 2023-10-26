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
exports.init = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const browser_cookie_handler_1 = require("../cookies/browser-cookie-handler");
const settings_1 = require("./settings");
const events_1 = require("../events");
const cookie_utils_1 = require("./cookies/cookie-utils");
/**
 * Initiates the Engage library using the global settings added by the developer
 * @param settings - Global settings added by the developer
 * @returns A promise that resolves with an object that handles the library functionality
 */
function init(settings) {
    return __awaiter(this, void 0, void 0, function* () {
        const settingsInstance = (0, settings_1.createSettings)(settings);
        if (!(0, browser_cookie_handler_1.cookieExists)("browserId")) {
            yield (0, browser_cookie_handler_1.createCookie)(settingsInstance.targetURL, settingsInstance.clientKey, settingsInstance.cookieSettings);
        }
        return {
            addProduct: (eventData) => new events_1.AddProductEvent(eventData, settingsInstance).send(),
            checkout: (eventData) => new events_1.CheckoutEvent(eventData, settingsInstance).send(),
            clearCart: (eventData) => new events_1.ClearCartEvent(eventData, settingsInstance).send(),
            confirmCart: (eventData) => new events_1.ConfirmEvent(eventData, settingsInstance).send(),
            event: (eventData) => new events_1.CustomEvent(eventData, settingsInstance).send(),
            identity: (eventData) => new events_1.IdentityEvent(eventData, settingsInstance).send(),
            pageView: (eventData) => new events_1.PageViewEvent(eventData, settingsInstance).send(),
            payment: (eventData) => new events_1.PaymentEvent(eventData, settingsInstance).send(),
        };
    });
}
exports.init = init;
