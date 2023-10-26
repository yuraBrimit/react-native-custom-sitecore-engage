import { INextRequest, INextResponse, IHttpResponse, IHttpRequest, ISettingsParams } from '../utils/interfaces';
/**
 * A high level module to abstract server set cookie logic
 */
export declare class EngageServer {
    /**
     * A function that handles the server set cookie
     *
     * @param  T - Interface with constraint for extending request
     * @param  X - Interface with constraint for extending response
     * @param  ISettingsParams - Global settings added by the developer
     */
    static handleEngageCookie<T extends INextRequest | IHttpRequest, X extends INextResponse | IHttpResponse>(req: T, res: X, opt: ISettingsParams): Promise<void>;
}
