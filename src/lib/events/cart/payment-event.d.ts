import { ISettingsObject } from '../../utils/interfaces';
import { BaseEvent, ICdpResponse } from '../base-event';
import { IEventAttributesInput } from '../common-interfaces';
export declare class PaymentEvent extends BaseEvent {
    eventData: IPaymentEventInput;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Payment event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: IPaymentEventInput, settings: ISettingsObject);
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<ICdpResponse | null>;
}
/**
 * Object input for the the necessary attributes for mapping with the Sitecore Cloud Payment event
 */
export interface IPaymentEventInput extends IEventAttributesInput {
    payType: string;
}
