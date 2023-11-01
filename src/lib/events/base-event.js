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
exports.BaseEvent = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const get_browser_id_1 = require("../cookies/get-browser-id");
const url_builder_1 = require("../utils/url-builder");
class BaseEvent {
    /**
     * The base event class that has all the shared functions
     * @param BaseEventData - The event data to send
     * @param settings - The global settings
     */
    constructor(BaseEventData, settings) {
        this.BaseEventData = BaseEventData;
        this.settings = settings;
        this.browserId = (0, get_browser_id_1.getBrowserId)("browserId");
        this.BaseEventData.language = BaseEvent.inferLanguage(BaseEventData.language);
        this.BaseEventData.page = BaseEvent.inferPageName(BaseEventData.page);
    }
    /**
     * Infers the language attribute
     * @param languageParameter - The optional language parameter that the developer can pass to the event data
     * @returns - Language attribute
     */
    static inferLanguage(languageParameter) {
        if (languageParameter)
            return languageParameter;
    }
    /**
     * Infers the page attribute
     * @param pageParameter - The optional page parameter that the developer can pass to the event data
     * @returns - Page attribute
     */
    static inferPageName(pageParameter) {
        if (pageParameter)
            return pageParameter;
    }
    /**
     * Creates the body of the request
     * Any optional parameters will be inferred or replaced with default values.
     * @param cdpEventAttributes - CDP event attributes
     */
    createRequestBody(eventDataAttributes) {
        return Object.assign({}, this.getBaseEventCDPAttributes(), eventDataAttributes);
    }
    /**
     *  A function that returns the mandatory properties for sending events to Sitecore CDP
     * @param channel - The channel property
     * @param client_key -  The client key
     * @param currency -  The currency
     * @param language - The language
     * @param page - The page
     * @param pos - The pos
     * @returns an object that is required
     */
    getBaseEventCDPAttributes() {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            browser_id: this.browserId,
            channel: this.BaseEventData.channel,
            /* eslint-disable @typescript-eslint/naming-convention */
            client_key: this.settings.clientKey,
            currency: this.BaseEventData.currency,
            language: this.BaseEventData.language,
            page: this.BaseEventData.page,
            pos: this.BaseEventData.pos,
        };
    }
    /**
     * Sends an event to Sitecore CDP
     * @param cdpEventAttributes - CDP event attributes
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    sendEvent(cdpEventAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchBody = this.createRequestBody(cdpEventAttributes);
            return this.fetchEvent(JSON.stringify(fetchBody));
        });
    }
    /**
     * Sends the payload to Sitecore CDP
     * @param fetchBody - The payload for the Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    fetchEvent(fetchBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = {
                body: fetchBody,
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            };
            const eventUrl = (0, url_builder_1.generateEventUrl)(this.settings.targetURL);
            return fetch(eventUrl, fetchOptions)
                .then((response) => response.json())
                .then((data) => {
                return data;
            })
                .catch(() => null);
        });
    }
}
exports.BaseEvent = BaseEvent;
