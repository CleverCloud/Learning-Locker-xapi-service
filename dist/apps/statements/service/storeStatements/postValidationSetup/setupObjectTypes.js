"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var modr = __importStar(require("../../../utils/modr"));
var obj = function (defaultObjectType) {
    return modr.modifySchema({
        objectType: modr.defaultValue(function () { return defaultObjectType; }),
    });
};
var members = modr.modifySchema({
    // eslint-disable-next-line no-use-before-define
    member: modr.modifyCollection(function () { return actor; }),
});
var agent = obj('Agent');
var group = modr.composeModifiers([obj('Group'), members]);
var activity = obj('Activity');
var actor = modr.composeModifiers([agent, group]);
var contextActivities = modr.modifySchema({
    parent: modr.modifyCollection(function () { return activity; }),
    grouping: modr.modifyCollection(function () { return activity; }),
    category: modr.modifyCollection(function () { return activity; }),
    other: modr.modifyCollection(function () { return activity; }),
});
var context = modr.modifySchema({
    team: group,
    instructor: agent,
    contextActivities: contextActivities,
});
var subStatement = modr.modifyType(Object, function (data) {
    return data.objectType === 'SubStatement'
        ? // eslint-disable-next-line no-use-before-define
            statementBase(data)
        : data;
});
var object = modr.composeModifiers([activity, actor, subStatement]);
var statementBase = modr.modifySchema({ actor: actor, object: object, context: context });
exports.default = (function (model) {
    return statementBase(model);
});
//# sourceMappingURL=setupObjectTypes.js.map