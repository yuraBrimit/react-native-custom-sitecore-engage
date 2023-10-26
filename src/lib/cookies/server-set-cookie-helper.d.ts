/**
 * Evaluates whether a specified cookie name exists in the request header
 * @param cookiesHeader - The cookie string of the request header
 * @param cookieName - The cookie name to be found
 * @returns - A boolean value if cookie exists
 */
export declare function cookieExistsInServerSide(cookiesHeader: string, cookieName: string): boolean;
/**
 * Retrieves the cookie name and value from the request header
 * @param cookiesHeader - The cookie string of the request header
 * @param cookieName - The cookie name to be found
 * @returns - The name and value of the cookie, or undefined
 */
export declare function getCookieServerSide(cookiesHeader: string, cookieName: string): {
    name: string;
    value: string;
} | undefined;
