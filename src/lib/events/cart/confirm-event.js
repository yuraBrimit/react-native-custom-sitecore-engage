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
exports.ConfirmEvent = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("../../utils/consts");
const base_event_1 = require("../base-event");
class ConfirmEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Confirm event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData, settings) {
        const { channel, currency, pos, language, page, productItemIds } = eventData;
        if (productItemIds.length === 0)
            throw new Error('[MV-0005] "productItemIds" cannot be empty.');
        super({ channel, currency, language, page, pos }, settings);
        this.eventData = eventData;
    }
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventCDPData = {
                product: this.eventData.productItemIds.map((id) => {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    return { item_id: id };
                }),
                type: consts_1.EventTypes.Confirm,
            };
            const response = yield this.sendEvent(Object.assign(eventCDPData));
            return response;
        });
    }
}
exports.ConfirmEvent = ConfirmEvent;
