import { ISettingsObject } from '../../utils/interfaces';
import { BaseEvent, ICdpResponse } from '../base-event';
import { IEventAttributesInput } from '../common-interfaces';
export declare class CheckoutEvent extends BaseEvent {
    eventData: ICheckoutEventInput;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a Checkout event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: ICheckoutEventInput, settings: ISettingsObject);
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<ICdpResponse | null>;
}
/**
 * Object input for the the necessary attributes for mapping with the Sitecore Cloud Checkout event
 */
export interface ICheckoutEventInput extends IEventAttributesInput {
    status: CheckoutStatus;
    referenceId: string;
}
/**
 * Values for the Checkout event status property
 */
export declare enum CheckoutStatus {
    PURCHASED = "PURCHASED",
    PAYMENT_PENDING = "PAYMENT_PENDING",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED"
}
