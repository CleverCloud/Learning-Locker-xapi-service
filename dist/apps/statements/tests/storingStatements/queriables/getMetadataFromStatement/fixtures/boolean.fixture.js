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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanInteractionActivityStatement = void 0;
var ActivityInteractionType_1 = __importDefault(require("../../../../../models/ActivityInteractionType"));
var statements_fixture_1 = require("./statements.fixture");
var booleanInteractionActivityStatement = __assign(__assign({}, statements_fixture_1.statementDefaults), {
    result: {
        response: 'true',
    },
    object: {
        definition: {
            name: { 'en-US': 'Question 1' },
            description: { 'en-US': 'Does the TCAPI include the concept of statements?' },
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: ActivityInteractionType_1.default.TRUE_FALSE,
            correctResponsesPattern: ['true'],
        },
    },
});
exports.booleanInteractionActivityStatement = booleanInteractionActivityStatement;
//# sourceMappingURL=boolean.fixture.js.map