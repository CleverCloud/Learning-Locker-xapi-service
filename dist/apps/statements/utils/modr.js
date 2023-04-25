"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeModifiers = exports.modifyCollection = exports.modifyRestrictedSchema = exports.modifySchema = exports.modifyType = exports.keepValue = exports.overrideValue = exports.defaultValue = void 0;
var defaultValue = function (value) {
    return function (data) {
        return data === undefined ? value() : data;
    };
};
exports.defaultValue = defaultValue;
var overrideValue = function (value) {
    return function () {
        return value;
    };
};
exports.overrideValue = overrideValue;
var keepValue = function (data) { return data; };
exports.keepValue = keepValue;
var modifyType = function (type, modifier) {
    return function (data) {
        return data !== undefined && data !== null && data.constructor === type ? modifier(data) : data;
    };
};
exports.modifyType = modifyType;
var modifySchema = function (schema) {
    return exports.modifyType(Object, function (data) {
        return Object.keys(schema).reduce(function (newData, key) {
            var _a;
            var value = schema[key](data[key]);
            return __assign(__assign({}, newData), (value === undefined ? {} : (_a = {}, _a[key] = value, _a)));
        }, data);
    });
};
exports.modifySchema = modifySchema;
var modifyRestrictedSchema = function (schema) {
    return exports.modifyType(Object, function (data) {
        return Object.keys(schema).reduce(function (newData, key) {
            var _a;
            var value = schema[key](data[key]);
            return __assign(__assign({}, newData), (value === undefined ? {} : (_a = {}, _a[key] = value, _a)));
        }, {});
    });
};
exports.modifyRestrictedSchema = modifyRestrictedSchema;
var modifyCollection = function (modifier) {
    return exports.modifyType(Array, function (data) {
        return data.map(function (elem, index) {
            return modifier(index)(elem);
        });
    });
};
exports.modifyCollection = modifyCollection;
var composeModifiers = function (modifiers) {
    return function (data) {
        return modifiers.reduce(function (result, modifier) {
            return modifier(result);
        }, data);
    };
};
exports.composeModifiers = composeModifiers;
//# sourceMappingURL=modr.js.map