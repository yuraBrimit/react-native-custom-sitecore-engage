import { ISettingsObject } from '../utils/interfaces';
import { ICdpEventAttributes, IEventAttributesInput } from './common-interfaces';
export declare class BaseEvent {
    BaseEventData: IEventAttributesInput;
    protected settings: ISettingsObject;
    browserId: string;
    /**
     * The base event class that has all the shared functions
     * @param BaseEventData - The event data to send
     * @param settings - The global settings
     */
    constructor(BaseEventData: IEventAttributesInput, settings: ISettingsObject);
    /**
     * Infers the language attribute
     * @param languageParameter - The optional language parameter that the developer can pass to the event data
     * @returns - Language attribute
     */
    static inferLanguage(languageParameter?: string): string;
    /**
     * Infers the page attribute
     * @param pageParameter - The optional page parameter that the developer can pass to the event data
     * @returns - Page attribute
     */
    static inferPageName(pageParameter?: string): string;
    /**
     * Creates the body of the request
     * Any optional parameters will be inferred or replaced with default values.
     * @param cdpEventAttributes - CDP event attributes
     */
    createRequestBody(eventDataAttributes: ICdpEventAttributes): ICdpEventFetchBody;
    /**
     *  A function that returns the mandatory properties for sending events to Sitecore CDP
     * @param channel - The channel property
     * @param client_key -  The client key
     * @param currency -  The currency
     * @param language - The language
     * @param page - The page
     * @param pos - The pos
     * @returns an object that is required
     */
    private getBaseEventCDPAttributes;
    /**
     * Sends an event to Sitecore CDP
     * @param cdpEventAttributes - CDP event attributes
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    sendEvent(cdpEventAttributes: ICdpEventAttributes): Promise<ICdpResponse | null>;
    /**
     * Sends the payload to Sitecore CDP
     * @param fetchBody - The payload for the Sitecore CDP
     * @returns - A promise that resolves with either the Sitecore CDP response object or null
     */
    fetchEvent(fetchBody: string): Promise<ICdpResponse | null>;
}
/**
 * The response object that Sitecore CDP returns
 */
export interface ICdpResponse {
    ref: string;
    status: string;
    version: string;
    client_key: string;
}
/**
 * Properties to react with the Sitecore CDP
 */
interface ICdpEventFetchBody extends ICdpEventAttributes, IEventAttributesInput {
    client_key: string;
}
export {};
