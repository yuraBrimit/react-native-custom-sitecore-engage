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
exports.IdentityEvent = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("../utils/consts");
const date_checker_1 = require("../utils/date-checker");
const email_validator_1 = require("../utils/email-validator");
const base_event_1 = require("./base-event");
class IdentityEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a IDENTITY event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData, settings) {
        const { channel, currency, pos, language, page } = eventData;
        super({ channel, currency, language, page, pos }, settings);
        this.eventData = eventData;
        this.validateAttributes(eventData);
    }
    /**
     * Function that validates the identifiers object, email and date attributes for CDN users
     *  * @param eventData - The data to be validated
     */
    validateAttributes(eventData) {
        if (eventData.identifiers.length === 0)
            throw new Error(`[MV-0004] "identifiers" is required.`);
        if (eventData.dob !== undefined && !(0, date_checker_1.isShortISODateString)(eventData.dob))
            throw new Error(`[IV-0002] Incorrect value for "dob". Format the value according to ISO 8601.`);
        eventData.identifiers.forEach((identifier) => {
            if (identifier.expiryDate && !(0, date_checker_1.isShortISODateString)(identifier.expiryDate))
                throw new Error(`[IV-0004] Incorrect value for "expiryDate". Format the value according to ISO 8601.`);
        });
        if (eventData.email && !(0, email_validator_1.isValidEmail)(eventData.email))
            throw new Error(`[IV-0003] Incorrect value for "email". Set the value to a valid email address.`);
    }
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const eventCDPData = {
                city: this.eventData.city,
                country: this.eventData.country,
                dob: this.eventData.dob,
                email: this.eventData.email,
                firstname: this.eventData.firstName,
                gender: this.eventData.gender,
                identifiers: this.eventData.identifiers.map((value) => {
                    return {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        expiry_date: value.expiryDate,
                        id: value.id,
                        provider: value.provider,
                    };
                }),
                lastname: this.eventData.lastName,
                mobile: this.eventData.mobile,
                phone: this.eventData.phone,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                postal_code: this.eventData.postalCode,
                state: this.eventData.state,
                street: this.eventData.street,
                title: this.eventData.title,
                type: consts_1.EventTypes.Identity,
            };
            const response = yield this.sendEvent(Object.assign(eventCDPData));
            return response;
        });
    }
}
exports.IdentityEvent = IdentityEvent;
