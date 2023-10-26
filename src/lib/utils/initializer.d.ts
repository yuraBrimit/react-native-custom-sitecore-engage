import { Engage, ISettingsParams } from './interfaces';
/**
 * Initiates the Engage library using the global settings added by the developer
 * @param settings - Global settings added by the developer
 * @returns A promise that resolves with an object that handles the library functionality
 */
export declare function init(settings: ISettingsParams): Promise<Engage>;
