import { ISettingsObject } from '../utils/interfaces';
import { BaseEvent } from './base-event';
import { IEventAttributesInput, ICdpEventAttributes } from './common-interfaces';
export declare class PageViewEvent extends BaseEvent {
    static isFirstPageView: boolean;
    cdpEventAttributes: ICdpEventAttributes;
    /**
     * A class that extends from {@link BaseEvent} and has all the required functionality to send a VIEW event
     * @param eventData - The event data to send
     * @param settings - The global settings
     */
    constructor(eventData: IPageViewEventInput, settings: ISettingsObject);
    /**
     * Gets the variant ID  if not passed by the developer
     * @returns - variant ID or null
     */
    static getPageVariantId(pageVariantIdParameter?: string): string | null;
    /**
     * @returns - href or undefined
     */
    static getReferrer(): string | null;
    /**
     * Retrieves UTM parameters if they exist in the url
     * @returns - an object containing the UTM parameters or an empty object when none found 
     */
    static getUTMParameters(): IUtmParameters;
    /**
     * Sends the event to Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    send(): Promise<import("./base-event").ICdpResponse | null>;
}
/**
 * Type with the required/optional attributes in order to send a view event to SitecoreCloud API
 */
export interface IPageViewEventInput extends IEventAttributesInput {
    pageVariantId?: string;
}
/**
 * Interface with the utm_ parameters
 */
interface IUtmParameters {
    [key: `utm_${string}`]: string;
}
export {};
