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
exports.wrapContextActivitiesInArrays = void 0;
var modr = __importStar(require("../../../utils/modr"));
var wrapObjectInArray = modr.modifyType(Object, function (data) {
    return [data];
});
var modifyContext = modr.modifySchema({
    contextActivities: modr.modifySchema({
        parent: wrapObjectInArray,
        grouping: wrapObjectInArray,
        category: wrapObjectInArray,
        other: wrapObjectInArray,
    }),
});
var modifySubStatement = modr.modifySchema({
    context: modifyContext,
});
exports.wrapContextActivitiesInArrays = modr.modifySchema({
    context: modifyContext,
    object: modr.modifyType(Object, function (data) {
        return data.objectType === 'SubStatement' ? modifySubStatement(data) : data;
    }),
});
//# sourceMappingURL=wrapContextActivitiesInArrays.js.map