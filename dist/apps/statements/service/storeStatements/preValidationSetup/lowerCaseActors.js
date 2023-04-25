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
exports.lowerCaseActors = void 0;
var modr = __importStar(require("../../../utils/modr"));
var lowerCaseString = modr.modifyType(String, function (data) {
    return data.toLowerCase();
});
var lowerCaseIfis = modr.modifySchema({
    mbox: lowerCaseString,
    openid: lowerCaseString,
    account: modr.modifySchema({
        name: lowerCaseString,
        homePage: lowerCaseString,
    }),
    member: modr.modifyCollection(function () { return lowerCaseIfis; }),
});
var lowerCaseIfisInObject = modr.modifyType(Object, function (data) {
    if (data.objectType === 'SubStatement') {
        return modr.modifySchema({
            actor: lowerCaseIfis,
            object: lowerCaseIfis,
            context: modr.modifySchema({
                instructor: lowerCaseIfis,
            }),
        })(data);
    }
    return lowerCaseIfis(data);
});
var lowerCaseActors = function (config) {
    if (!config.enableActorLowerCasing) {
        return modr.keepValue;
    }
    return modr.modifySchema({
        actor: lowerCaseIfis,
        object: lowerCaseIfisInObject,
        context: modr.modifySchema({
            instructor: lowerCaseIfis,
        }),
    });
};
exports.lowerCaseActors = lowerCaseActors;
//# sourceMappingURL=lowerCaseActors.js.map