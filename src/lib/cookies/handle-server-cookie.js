"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngageServer = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const cookie_utils_1 = require("../utils/cookies/cookie-utils");
const get_browser_id_from_cdp_1 = require("../utils/get-browser-id-from-cdp");
const settings_1 = require("../utils/settings");
const server_set_cookie_helper_1 = require("./server-set-cookie-helper");
/**
 * A high level module to abstract server set cookie logic
 */
class EngageServer {
    /**
     * A function that handles the server set cookie
     *
     * @param  T - Interface with constraint for extending request
     * @param  X - Interface with constraint for extending response
     * @param  ISettingsParams - Global settings added by the developer
     */
    static handleEngageCookie(req, res, opt) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
			// nothing to do
        });
    }
}
exports.EngageServer = EngageServer;
