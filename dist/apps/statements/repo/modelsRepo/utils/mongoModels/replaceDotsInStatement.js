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
exports.decodeDotsInStatement = exports.encodeDotsInStatement = exports.replaceDotsInExtensions = void 0;
var lodash_1 = require("lodash");
var modr = __importStar(require("../../../../utils/modr"));
var replaceDotsInExtensions = function (searchValue, replaceValue) {
    return modr.modifyType(Object, function (extensions) {
        var encodedRootExtensions = lodash_1.mapKeys(extensions, function (_value, key) {
            return key.replace(searchValue, replaceValue);
        });
        var encodedExtensions = lodash_1.mapValues(encodedRootExtensions, function (value) {
            if (lodash_1.isPlainObject(value)) {
                return exports.replaceDotsInExtensions(searchValue, replaceValue)(value);
            }
            return value;
        });
        return encodedExtensions;
    });
};
exports.replaceDotsInExtensions = replaceDotsInExtensions;
var replaceDotsInParent = function (searchValue, replaceValue) {
    return modr.modifySchema({
        extensions: exports.replaceDotsInExtensions(searchValue, replaceValue),
    });
};
var replaceDotsInActivity = function (searchValue, replaceValue) {
    return modr.modifySchema({
        definition: replaceDotsInParent(searchValue, replaceValue),
    });
};
var replaceDotsInActivities = function (searchValue, replaceValue) {
    return modr.modifyCollection(function () { return replaceDotsInActivity(searchValue, replaceValue); });
};
var replaceDotsInObject = function (searchValue, replaceValue) {
    return function (data) {
        if (data.objectType === 'Activity') {
            return replaceDotsInActivity(searchValue, replaceValue)(data);
        }
        if (data.objectType === 'SubStatement') {
            // eslint-disable-next-line no-use-before-define
            return replaceDotsInStatement(searchValue, replaceValue)(data);
        }
        return data;
    };
};
var replaceDotsInContext = function (searchValue, replaceValue) {
    return modr.modifySchema({
        contextActivities: modr.modifySchema({
            category: replaceDotsInActivities(searchValue, replaceValue),
            grouping: replaceDotsInActivities(searchValue, replaceValue),
            parent: replaceDotsInActivities(searchValue, replaceValue),
            other: replaceDotsInActivities(searchValue, replaceValue),
        }),
        extensions: exports.replaceDotsInExtensions(searchValue, replaceValue),
    });
};
var replaceDotsInStatement = function (searchValue, replaceValue) {
    return modr.modifySchema({
        object: replaceDotsInObject(searchValue, replaceValue),
        context: replaceDotsInContext(searchValue, replaceValue),
        result: replaceDotsInParent(searchValue, replaceValue),
    });
};
exports.encodeDotsInStatement = replaceDotsInStatement(/\./g, '&46;');
exports.decodeDotsInStatement = replaceDotsInStatement(/&46;/g, '.');
//# sourceMappingURL=replaceDotsInStatement.js.map