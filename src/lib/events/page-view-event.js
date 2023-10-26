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
exports.PageViewEvent = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("../utils/consts");
const base_event_1 = require("./base-event");
class PageViewEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a VIEW event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData, settings) {
        const { channel, currency, pos, language, page } = eventData;
        super({
            channel,
            currency,
            language,
            page,
            pos,
        }, settings);
        this.cdpEventAttributes = {
            type: consts_1.EventTypes.View,
        };
        //if (this.settings.includeUTMParameters) {
        //    const utmParameters = PageViewEvent.getUTMParameters();
        //    this.cdpEventAttributes = Object.assign(Object.assign({}, this.cdpEventAttributes), utmParameters);
        //}
        //const pageVariantId = PageViewEvent.getPageVariantId(eventData.pageVariantId);
        //if (pageVariantId !== null)
        //    this.cdpEventAttributes.ext = Object.assign(Object.assign({}, this.cdpEventAttributes.ext), { pageVariantId });
        //const referrer = PageViewEvent.getReferrer();
        //if (referrer !== null)
        //    this.cdpEventAttributes = Object.assign(Object.assign({}, this.cdpEventAttributes), { referrer });
    }
    /**
     * Gets the variant ID  if not passed by the developer
     * @returns - variant ID or null
     */
    static getPageVariantId(pageVariantIdParameter) {
        if (pageVariantIdParameter)
            return pageVariantIdParameter;
        return '';
    }
    /**
     * @returns - href or undefined
     */
    static getReferrer() {
        return null;
    }
    /**
     * Retrieves UTM parameters if they exist in the url
     * @returns - an object containing the UTM parameters or an empty object when none found 
     */
    static getUTMParameters() {
        const utmParameters = {};
        return utmParameters;
    }
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            PageViewEvent.isFirstPageView = false;
            const response = yield this.sendEvent(this.cdpEventAttributes);
            return response;
        });
    }
}
exports.PageViewEvent = PageViewEvent;
PageViewEvent.isFirstPageView = true;
