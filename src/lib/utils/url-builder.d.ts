/**
 * Creates the URL for retrieving the browser ID from Sitecore CDP
 * @param targetURL - From global settings
 * @param clientKey - From global settings
 * @returns The URL string for retrieving the browser ID
 */
export declare function generateCreateBrowserIdUrl(targetURL: string, clientKey: string): string;
/**
 * Creates the URL for sending events to Sitecore CDP
 * @param targetURL - From global settings
 * @returns The URL string for sending events
 */
export declare function generateEventUrl(targetURL: string): string;
