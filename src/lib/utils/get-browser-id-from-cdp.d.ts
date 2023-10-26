/**
 * Gets the browser ID from Sitecore CDP
 * @param targetURL - From global settings
 * @param clientKey - From global settings
 * @returns the browser ID
 */
export declare function getBrowserIdFromCdp(targetURL: string, clientKey: string): Promise<string>;
