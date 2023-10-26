/**
 * Checks if the provided string is a shortened version of ISO 8601 date format ‘YYYY-MM-DD’T’hh:mm’
 * @param date - The date string provided by the developer
 * @returns - A boolean if the string is valid otherwise false
 */
export declare function isShortISODateString(date: string): boolean;
/**
 * Evaluates if the provided string is the long version of ISO 8601 date format ‘YYYY-MM-DD’T’hh:mm:ss.sssZ’
 * @param date - The date string provided by the developer
 * @returns - A boolean if the strign is valid, otherwise false
 */
export declare function isISODateString(date: string): boolean;
