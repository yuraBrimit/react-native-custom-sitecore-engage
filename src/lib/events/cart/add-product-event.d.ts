import { ISettingsObject } from '../../utils/interfaces';
import { BaseEvent } from '../base-event';
import { IEventAttributesInput } from '../common-interfaces';
export declare class AddProductEvent extends BaseEvent {
    eventData: IAddProductEventAttributesInput;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a cart ADD event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: IAddProductEventAttributesInput, settings: ISettingsObject);
    /**
     * Function that validates the order date attributes
     *  * @param dateString - The date string to be validated
     */
    private validateOrderDate;
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<import("../base-event").ICdpResponse | null>;
}
/**
 * Interface describing necessary attribute types for the input for sending cart Add events
 */
export interface IAddProductEventAttributesInput extends IEventAttributesInput {
    product: IProduct;
}
/**
 * Interface describing the attribute types withing product object
 */
export interface IProduct {
    type: Uppercase<string>;
    itemId: string;
    name: string;
    orderedAt: string;
    quantity: number;
    price: number;
    productId: string;
    currency: string;
    originalPrice?: number;
    originalCurrencyCode?: string;
    referenceId: string;
}
