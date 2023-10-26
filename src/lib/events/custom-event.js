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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = require("../utils/consts");
const base_event_1 = require("./base-event");
class CustomEvent extends base_event_1.BaseEvent {
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Custom event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData, settings) {
        const { channel, currency, pos, language, page, type } = eventData, extra = __rest(eventData, ["channel", "currency", "pos", "language", "page", "type"]);
        super({ channel, currency, language, page, pos }, settings);
        this.maxExtAttributes = 50;
        CustomEvent.validateType(type);
        this.cdpEventAttributes = {
            type: type,
        };
        if (Object.entries(extra).length > this.maxExtAttributes)
            throw new Error(`[IV-0005] This event supports maximum ${this.maxExtAttributes} attributes. Reduce the number of attributes.`);
        if (Object.entries(extra).length !== 0)
            this.cdpEventAttributes.ext = extra;
    }
    /**
     * Checks if the provided type is not a reserved one. If it is, throws an error.
     * @param type - The string that the developer passed
     */
    static validateType(type) {
        const reservedTypes = Object.values(consts_1.EventTypes);
        if (reservedTypes.includes(type))
            throw new Error(`[IV-0006] The event type "${type}" is a reserved event name. Use an event name that is not reserved.`);
    }
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendEvent(this.cdpEventAttributes);
            return response;
        });
    }
}
exports.CustomEvent = CustomEvent;
