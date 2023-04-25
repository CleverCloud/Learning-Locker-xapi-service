"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var removeDuplications = function (elements, mapper, uniqueElements, existingValues) {
    if (elements.length === 0) {
        return uniqueElements;
    }
    var element = elements[0], nextElements = elements.slice(1);
    var value = mapper(element);
    var isUniqueValue = existingValues.indexOf(value) === -1;
    var nextUniqueElements = isUniqueValue ? __spreadArray(__spreadArray([], uniqueElements), [element]) : uniqueElements;
    var nextExistingValues = isUniqueValue ? __spreadArray(__spreadArray([], existingValues), [value]) : existingValues;
    return removeDuplications(nextElements, mapper, nextUniqueElements, nextExistingValues);
};
exports.default = (function (arr, mapper) {
    return removeDuplications(arr, mapper, [], []);
});
//# sourceMappingURL=removeDuplicates.js.map