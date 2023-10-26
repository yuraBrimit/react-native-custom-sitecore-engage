import { ICheckoutEventInput, IConfirmEventAttributesInput, IPaymentEventInput } from '../events';
import { ICdpResponse } from '../events/base-event';
import { IEventAttributesInput } from '../events/common-interfaces';
import { ICustomEventInput } from '../events/custom-event';
import { IIdentityEventAttributesInput } from '../events/identity-event';
import { IPageViewEventInput } from '../events/page-view-event';
import { IAddProductEventAttributesInput } from '../events/cart/add-product-event';
/**
 * Properties for the global settings object
 */
interface IBasicSettings {
    clientKey: string;
    targetURL: string;
    includeUTMParameters?: boolean;
}
/**
 * Extends the global settings object with additional properties
 */
export interface ISettingsParams extends IBasicSettings {
    cookiePath?: string;
    cookieExpiryDays?: number;
    cookieDomain?: string;
    forceServerCookieMode?: boolean;
}
/**
 * Properties for the cookie object
 */
export interface ICookieSettings {
    cookieName: string;
    cookieDomain?: string;
    cookieExpiryDays: number;
    cookiePath?: string;
    forceServerCookieMode: boolean;
}
/**
 * Extends the global settings object with additional properties
 */
export interface ISettingsObject extends IBasicSettings {
    cookieSettings: ICookieSettings;
}
/**
 * Cookie properties
 */
export interface ICookieProperties {
    maxAge: number;
    sameSite: SameSiteProperties;
    secure: boolean;
    path?: string;
    httpOnly?: boolean;
    expires?: Date;
    domain?: string;
}
/**
 * Values for the [sameSite] cookie property
 */
export declare enum SameSiteProperties {
    Strict = "Strict",
    Lax = "Lax",
    None = "None"
}
/**
 * Handles the library functionality
 * @param event - The event
 * @param pageView - The pageView event
 */
export interface Engage {
    /**
     * A function that sends an ADD event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    addProduct: (eventData: IAddProductEventAttributesInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends a CHECKOUT event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    checkout: (eventData: ICheckoutEventInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends a CLEAR_CART event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    clearCart: (eventData: IEventAttributesInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends a CONFIRM event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    confirmCart: (eventData: IConfirmEventAttributesInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends an event to SitecoreCloud API with the specified type
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    event: (eventData: ICustomEventInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends a IDENTITY event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    identity: (eventData: IIdentityEventAttributesInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends a VIEW event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    pageView: (eventData: IPageViewEventInput) => Promise<ICdpResponse | null>;
    /**
     * A function that sends an PAYMENT event to SitecoreCloud API
     * @param eventData - The required/optional attributes in order to be send to SitecoreCloud API
     * @returns The response object that Sitecore CDP returns
     */
    payment: (eventData: IPaymentEventInput) => Promise<ICdpResponse | null>;
}
/**
 * Interface for supporting response OutgoingMessage http node type
 */
export interface IHttpResponse {
    setHeader(name: string, value: number | string | ReadonlyArray<string>): void;
}
/**
 * Interface for Edge Next.js Response
 */
export interface INextResponse {
    cookies: {
        set: (key: string, value: unknown, options?: any) => any;
    };
}
/**
 * Interface for supporting response IncomingMessage http node type
 */
export interface IHttpRequest {
    headers: {
        cookie?: string;
    };
}
/**
 * Interface for Edge Next.js Request
 */
export interface INextRequest {
    cookies: {
        get: (key: string) => string | undefined;
    };
}
export {};
