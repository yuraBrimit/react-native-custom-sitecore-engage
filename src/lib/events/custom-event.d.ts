import { ISettingsObject } from '../utils/interfaces';
import { BaseEvent } from './base-event';
import { IEventAttributesInput, ICdpEventAttributes } from './common-interfaces';
export declare class CustomEvent extends BaseEvent {
    cdpEventAttributes: ICdpEventAttributes;
    private maxExtAttributes;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Custom event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: ICustomEventInput, settings: ISettingsObject);
    /**
     * Checks if the provided type is not a reserved one. If it is, throws an error.
     * @param type - The string that the developer passed
     */
    static validateType(type: string): void;
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<import("./base-event").ICdpResponse | null>;
}
/**
 * Type with the required/optional attributes in order to send a custom event to SitecoreCloud API
 */
export interface ICustomEventInput extends IEventAttributesInput {
    type: string;
    [key: string]: string | boolean | number | undefined;
}
