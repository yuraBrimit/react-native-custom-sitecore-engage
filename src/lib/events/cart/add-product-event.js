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
exports.AddProductEvent = void 0;
const consts_1 = require("../../utils/consts");
const date_checker_1 = require("../../utils/date-checker");
const base_event_1 = require("../base-event");
class AddProductEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a cart ADD event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData, settings) {
        const { channel, currency, language, page, pos, product } = eventData;
        super({ channel, currency, language, page, pos }, settings);
        this.eventData = eventData;
        this.validateOrderDate(product.orderedAt);
    }
    /**
     * Function that validates the order date attributes
     *  * @param dateString - The date string to be validated
     */
    validateOrderDate(dateString) {
        if (!(0, date_checker_1.isISODateString)(dateString))
            throw new Error('Invalid order date format');
    }
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventCDPData = {
                product: {
                    currency: this.eventData.product.currency,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    item_id: this.eventData.product.itemId,
                    name: this.eventData.product.name,
                    orderedAt: this.eventData.product.orderedAt,
                    originalCurrencyCode: this.eventData.product.originalCurrencyCode,
                    originalPrice: this.eventData.product.originalPrice,
                    price: this.eventData.product.price,
                    productId: this.eventData.product.productId,
                    quantity: this.eventData.product.quantity,
                    referenceId: this.eventData.product.referenceId,
                    type: this.eventData.product.type,
                },
                type: consts_1.EventTypes.Add,
            };
            const response = yield this.sendEvent(Object.assign(eventCDPData));
            return response;
        });
    }
}
exports.AddProductEvent = AddProductEvent;
