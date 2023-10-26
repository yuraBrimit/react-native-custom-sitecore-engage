import { ISettingsObject } from '../../utils/interfaces';
import { BaseEvent } from '../base-event';
import { IEventAttributesInput } from '../common-interfaces';
export declare class ConfirmEvent extends BaseEvent {
    eventData: IConfirmEventAttributesInput;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Confirm event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: IConfirmEventAttributesInput, settings: ISettingsObject);
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<import("../base-event").ICdpResponse | null>;
}
/**
 * Type with the required/optional attributes in order to send a Confirm event to SitecoreCloud API
 */
export interface IConfirmEventAttributesInput extends IEventAttributesInput {
    productItemIds: string[];
}
