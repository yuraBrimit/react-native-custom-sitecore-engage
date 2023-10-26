import { ICookieProperties } from '../interfaces';
/**
 * Retrieves the cookie, if it exists in the cookie string
 * @param cookieStr - The cookie string containing every cookie
 * @param cookieName - The cookie name to be found
 * @returns - an object that contains the cookie name and value or undefined, if not found
 */
export declare function getCookie(cookieStr: string | undefined, cookieName: string): {
    name: string;
    value: string;
} | undefined;


