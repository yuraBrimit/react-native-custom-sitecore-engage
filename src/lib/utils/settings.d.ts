import { ISettingsParams, ISettingsObject } from './interfaces';
/**
 * Creates the global settings object, to be used by the library
 * @param settings - Global settings added by the developer.
 * @returns an ISettingsObject with the settings added by the developer
 */
export declare function createSettings(settings: ISettingsParams): ISettingsObject;
/**
 * A validation function for the required global settings
 */
export declare function validateSettings(settings: ISettingsParams): void;
