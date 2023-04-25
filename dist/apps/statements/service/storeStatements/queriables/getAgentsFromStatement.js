"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedAgentsFromStatement = exports.getAgentsFromStatement = exports.getGroupIdents = exports.getActorIdents = void 0;
var lodash_1 = require("lodash");
var getActorIdent_1 = __importDefault(require("../../../utils/getActorIdent"));
var getActorIdents = function (actor) {
    try {
        return [getActorIdent_1.default(actor)];
    }
    catch (err) {
        return [];
    }
};
exports.getActorIdents = getActorIdents;
var getGroupMemberIdents = function (group) {
    if (group.member === undefined) {
        return [];
    }
    // eslint-disable-next-line no-use-before-define
    return lodash_1.union.apply(void 0, group.member.map(getAgentsFromObject));
};
var getGroupIdents = function (group) {
    var idents = exports.getActorIdents(group);
    var members = getGroupMemberIdents(group);
    return __spreadArray(__spreadArray([], idents), members);
};
exports.getGroupIdents = getGroupIdents;
var getAgentsFromObject = function (obj) {
    switch (obj.objectType) {
        case 'Agent':
            return exports.getActorIdents(obj);
        case 'Group':
            return exports.getGroupIdents(obj);
        default:
            return [];
    }
};
var getAgentsFromTeam = function (statement) {
    var path = ['context', 'team'];
    if (lodash_1.has(statement, path)) {
        var team = lodash_1.get(statement, path);
        return getAgentsFromObject(team);
    }
    return [];
};
var getAgentsFromInstructor = function (statement) {
    var path = ['context', 'instructor'];
    if (lodash_1.has(statement, path)) {
        var team = lodash_1.get(statement, path);
        return getAgentsFromObject(team);
    }
    return [];
};
var getRelatedAgentsFromStatementBase = function (statement) {
    return __spreadArray(__spreadArray(__spreadArray([], exports.getAgentsFromStatement(statement)), getAgentsFromTeam(statement)), getAgentsFromInstructor(statement));
};
var getAgentsFromSubStatement = function (statement) {
    if (statement.object.objectType === 'SubStatement') {
        return getRelatedAgentsFromStatementBase(statement.object);
    }
    return [];
};
var getAgentsFromStatement = function (statement) {
    return lodash_1.union(__spreadArray(__spreadArray([], getAgentsFromObject(statement.actor)), getAgentsFromObject(statement.object)));
};
exports.getAgentsFromStatement = getAgentsFromStatement;
var getRelatedAgentsFromStatement = function (statement) {
    return lodash_1.union(__spreadArray(__spreadArray(__spreadArray([], getRelatedAgentsFromStatementBase(statement)), getAgentsFromObject(statement.authority)), getAgentsFromSubStatement(statement)));
};
exports.getRelatedAgentsFromStatement = getRelatedAgentsFromStatement;
//# sourceMappingURL=getAgentsFromStatement.js.map