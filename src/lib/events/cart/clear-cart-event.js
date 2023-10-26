"use strict";
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
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
exports.ClearCartEvent = void 0;
const consts_1 = require("../../utils/consts");
const base_event_1 = require("../base-event");
/**
 *
 * A class to create a Clear Cart event during the browser session
 * @param eventData - data input to create a clear cart event,
 * @param settings - required settings for retrieving basic properties for Sitecore Cloud
 */
class ClearCartEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Clear Cart event to
     * Sitecore Cloud
     * @param eventData - The required data input properties (e.g. channel, currency, pos, language, page) for sending
     * Clear Cart Events
     * @param settings - The global settings for Sitecore Cloud
     */
    constructor(eventData, settings) {
        const { channel, currency, pos, language, page } = eventData;
        super({ channel, currency, language, page, pos }, settings);
        this.eventData = eventData;
    }
    /**
     * Function that sends the event to Sitecore Cloud
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventCDPData = {
                type: consts_1.EventTypes.ClearCart,
            };
            return yield this.sendEvent(Object.assign(eventCDPData));
        });
    }
}
exports.ClearCartEvent = ClearCartEvent;
