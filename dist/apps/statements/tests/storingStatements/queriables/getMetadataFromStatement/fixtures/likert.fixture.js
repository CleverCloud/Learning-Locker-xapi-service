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
exports.likertStatement = void 0;
var ActivityInteractionType_1 = __importDefault(require("../../../../../models/ActivityInteractionType"));
var statements_fixture_1 = require("./statements.fixture");
var likertStatement = __assign(__assign({}, statements_fixture_1.statementDefaults), {
    result: {
        response: 'likert_3',
    },
    object: {
        definition: {
            name: { 'en-US': 'Question 3' },
            description: { 'en-US': 'How awesome is xAPI?' },
            scale: [
                { id: 'likert_0', description: { 'en-US': 'It’s OK' } },
                { id: 'likert_1', description: { 'en-US': 'It’s Pretty Cool' } },
                { id: 'likert_2', description: { 'en-US': 'It’s Damn Cool' } },
                { id: 'likert_3', description: { 'en-US': 'It’s Gonna Change the World' } },
            ],
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: ActivityInteractionType_1.default.LIKERT,
            correctResponsesPattern: ['likert_3'],
        },
    },
});
exports.likertStatement = likertStatement;
//# sourceMappingURL=likert.fixture.js.map