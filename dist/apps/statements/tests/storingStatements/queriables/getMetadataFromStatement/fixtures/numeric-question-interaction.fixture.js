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
exports.numericQuestionWithMinAndMaxInteractionActivityStatement = exports.numericQuestionInteractionActivityStatement = void 0;
var ActivityInteractionType_1 = __importDefault(require("../../../../../models/ActivityInteractionType"));
var statements_fixture_1 = require("./statements.fixture");
var numericQuestionInteractionActivityStatement = __assign(__assign({}, statements_fixture_1.statementDefaults), {
    result: {
        response: '4:',
    },
    object: {
        definition: {
            name: { 'en-US': 'Question 7' },
            description: { 'en-US': 'How many jokes is Chris the butt of each day?' },
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: ActivityInteractionType_1.default.NUMERIC,
            correctResponsesPattern: ['4:'],
        },
    },
});
exports.numericQuestionInteractionActivityStatement = numericQuestionInteractionActivityStatement;
var numericQuestionWithMinAndMaxInteractionActivityStatement = __assign(__assign({}, statements_fixture_1.statementDefaults), {
    result: {
        response: '4[:]5',
    },
    object: {
        definition: {
            name: { 'en-US': 'Question 7' },
            description: { 'en-US': 'How many jokes is Chris the butt of each day?' },
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: ActivityInteractionType_1.default.NUMERIC,
            correctResponsesPattern: ['4[:]5'],
        },
    },
});
exports.numericQuestionWithMinAndMaxInteractionActivityStatement = numericQuestionWithMinAndMaxInteractionActivityStatement;
//# sourceMappingURL=numeric-question-interaction.fixture.js.map