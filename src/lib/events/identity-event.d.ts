import { ISettingsObject } from '../utils/interfaces';
import { BaseEvent } from './base-event';
import { IEventAttributesInput } from './common-interfaces';
export declare class IdentityEvent extends BaseEvent {
    eventData: IIdentityEventAttributesInput;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a IDENTITY event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: IIdentityEventAttributesInput, settings: ISettingsObject);
    /**
     * Function that validates the identifiers object, email and date attributes for CDN users
     *  * @param eventData - The data to be validated
     */
    private validateAttributes;
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<import("./base-event").ICdpResponse | null>;
}
/**
 * Object with the necessary attributes for the input for sending Identity events
 */
export interface IIdentityEventAttributesInput extends IEventAttributesInput {
    city?: string;
    country?: string;
    dob?: string;
    email?: string;
    firstName?: string;
    gender?: string;
    identifiers: IIdentifier[];
    lastName?: string;
    mobile?: string;
    phone?: string;
    postalCode?: string;
    state?: string;
    street?: string[];
    title?: string;
}
/**
 * The JSON array of objects that contain the identity identifiers
 */
export interface IIdentifier {
    expiryDate?: string;
    id: string;
    provider: string;
}
