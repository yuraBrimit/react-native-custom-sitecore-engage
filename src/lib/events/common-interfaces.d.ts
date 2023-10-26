import { EventTypes } from '../utils/consts';
/**
 * Event data that is sent to Sitecore CDP
 */
interface IMandatoryEventInput {
    channel: string;
    currency: string;
    pos: string;
}
/**
 * Event data that is sent to Sitecore CDP
 */
interface IInferrableEventInput {
    language?: string;
    page?: string;
}
/**
 * Interface to hold the base event attributes
 */
export interface IEventAttributesInput extends IMandatoryEventInput, IInferrableEventInput {
}
/**
 * Interface to hold the "ext" data
 */
interface IExtensionData {
    pageVariantId?: string;
    [key: string]: string | boolean | number | undefined;
}
/**
 * Interface with the properties for the events
 */
export interface ICdpEventAttributes {
    type: EventTypes | string;
    referrer?: string;
    ext?: IExtensionData;
    [key: string]: unknown;
}
export {};
