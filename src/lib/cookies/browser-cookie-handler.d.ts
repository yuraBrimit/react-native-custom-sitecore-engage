import { ICookieSettings } from '../utils/interfaces';
/**
 * Gets the value for a given cookie name
 * @param cookieName - The cookie name to be found
 * @returns - The value of the cookie if it exists or empty string
 */
export declare function getCookieValue(cookieName: string): string;
/**
 * @param targetURL - The targetURL from global settings
 * @param clientKey - The clientKey from global settings
 * @param settings - The ICookieSettings settings object
 * @returns - browserId or undefined on error
 */
export declare function createCookie(targetURL: string, clientKey: string, settings: ICookieSettings): Promise<string>;

/**
 * Checks if the cookie exists in the cookie string
 * @param cookieStr - The cookie string containing every cookie
 * @param cookieName - The cookie name to be found
 * @returns - boolean value, if the cookie is found in the cookie string
 */
export declare function cookieExists(cookieName: string): boolean;