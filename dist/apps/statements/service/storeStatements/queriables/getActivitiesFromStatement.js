"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedActivitiesFromStatement = exports.getActivitiesFromStatement = void 0;
var lodash_1 = require("lodash");
var getActivityIdsFromObject = function (obj) {
    if (obj.objectType === 'Activity') {
        return [obj.id];
    }
    return [];
};
var getActivitiesFromContextActivities = function (statement, key) {
    var path = ['context', 'contextActivities', key];
    if (lodash_1.has(statement, path)) {
        var activities = lodash_1.get(statement, path);
        return lodash_1.union.apply(void 0, activities.map(getActivityIdsFromObject));
    }
    return [];
};
var getActivitiesFromStatementBase = function (statement) {
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], getActivityIdsFromObject(statement.object)), getActivitiesFromContextActivities(statement, 'parent')), getActivitiesFromContextActivities(statement, 'grouping')), getActivitiesFromContextActivities(statement, 'category')), getActivitiesFromContextActivities(statement, 'other'));
};
var getActivitiesFromSubStatement = function (statement) {
    if (statement.object.objectType === 'SubStatement') {
        return getActivitiesFromStatementBase(statement.object);
    }
    return [];
};
var getActivitiesFromStatement = function (statement) {
    return getActivityIdsFromObject(statement.object);
};
exports.getActivitiesFromStatement = getActivitiesFromStatement;
var getRelatedActivitiesFromStatement = function (statement) {
    return lodash_1.union(__spreadArray(__spreadArray([], getActivitiesFromStatementBase(statement)), getActivitiesFromSubStatement(statement)));
};
exports.getRelatedActivitiesFromStatement = getRelatedActivitiesFromStatement;
//# sourceMappingURL=getActivitiesFromStatement.js.map