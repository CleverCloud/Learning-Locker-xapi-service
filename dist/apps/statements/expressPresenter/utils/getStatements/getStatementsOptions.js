"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boolean_1 = __importDefault(require("boolean"));
var parseJson_1 = __importDefault(require("./../../../utils/parseJson"));
/**
 * We pass back undefined where possible to avoid extra params being added to the
 * more link unnecessarily
 */
exports.default = (function (queryParams) {
    return {
        agent: queryParams.agent !== undefined
            ? parseJson_1.default(queryParams.agent, ['query', 'agent'])
            : undefined,
        verb: queryParams.verb,
        activity: queryParams.activity,
        registration: queryParams.registration,
        related_activities: queryParams.related_activities !== undefined
            ? boolean_1.default(queryParams.related_activities)
            : undefined,
        related_agents: queryParams.related_agents !== undefined ? boolean_1.default(queryParams.related_agents) : undefined,
        since: queryParams.since,
        until: queryParams.until,
        limit: queryParams.limit !== undefined ? Number(queryParams.limit) : undefined,
        ascending: queryParams.ascending !== undefined ? boolean_1.default(queryParams.ascending) : undefined,
        cursor: queryParams.cursor,
    };
});
//# sourceMappingURL=getStatementsOptions.js.map