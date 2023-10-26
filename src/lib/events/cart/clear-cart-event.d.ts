import { ISettingsObject } from '../../utils/interfaces';
import { BaseEvent, ICdpResponse } from '../base-event';
import { IEventAttributesInput } from '../common-interfaces';
/**
 *
 * A class to create a Clear Cart event during the browser session
 * @param eventData - data input to create a clear cart event,
 * @param settings - required settings for retrieving basic properties for Sitecore Cloud
 */
export declare class ClearCartEvent extends BaseEvent {
    eventData: IEventAttributesInput;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Clear Cart event to
     * Sitecore Cloud
     * @param eventData - The required data input properties (e.g. channel, currency, pos, language, page) for sending
     * Clear Cart Events
     * @param settings - The global settings for Sitecore Cloud
     */
    constructor(eventData: IEventAttributesInput, settings: ISettingsObject);
    /**
     * Function that sends the event to Sitecore Cloud
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<ICdpResponse | null>;
}
