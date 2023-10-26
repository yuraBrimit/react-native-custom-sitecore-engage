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
exports.CheckoutStatus = exports.CheckoutEvent = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("../../utils/consts");
const base_event_1 = require("../base-event");
class CheckoutEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Checkout event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData, settings) {
        const { channel, currency, pos, language, page } = eventData;
        super({ channel, currency, language, page, pos }, settings);
        this.eventData = eventData;
        // Run time validation for status & referenceID properties
        if (!Object.values(CheckoutStatus).includes(eventData.status))
            throw Error('The status is invalid');
        if (eventData.referenceId.trim().length === 0)
            throw Error('The referenceId should not be empty');
    }
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventCDPData = {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                reference_id: this.eventData.referenceId,
                status: this.eventData.status,
                type: consts_1.EventTypes.Checkout,
            };
            return yield this.sendEvent(Object.assign(eventCDPData));
        });
    }
}
exports.CheckoutEvent = CheckoutEvent;
/**
 * Values for the Checkout event status property
 */
var CheckoutStatus;
(function (CheckoutStatus) {
    CheckoutStatus["PURCHASED"] = "PURCHASED";
    CheckoutStatus["PAYMENT_PENDING"] = "PAYMENT_PENDING";
    CheckoutStatus["CONFIRMED"] = "CONFIRMED";
    CheckoutStatus["CANCELLED"] = "CANCELLED";
    CheckoutStatus["REFUNDED"] = "REFUNDED";
})(CheckoutStatus = exports.CheckoutStatus || (exports.CheckoutStatus = {}));
