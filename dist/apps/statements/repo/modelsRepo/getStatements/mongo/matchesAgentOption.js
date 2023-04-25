"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getActorIdent_1 = __importDefault(require("../../../../utils/getActorIdent"));
var matchesModel_1 = __importDefault(require("./matchesModel"));
var matcher = function (agent, opts) {
    var agentIdent = getActorIdent_1.default(agent);
    if (opts.related_agents === true) {
        return { relatedAgents: agentIdent };
    }
    return { agents: agentIdent };
};
exports.default = matchesModel_1.default(matcher, function (opts) {
    return opts.agent;
});
//# sourceMappingURL=matchesAgentOption.js.map