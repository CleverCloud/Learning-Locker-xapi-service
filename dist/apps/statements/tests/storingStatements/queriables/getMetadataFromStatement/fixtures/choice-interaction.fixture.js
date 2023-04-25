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
exports.multipleChoices = exports.singleChoice = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../../models/ActivityInteractionType"));
var statements_fixture_1 = require("./statements.fixture");
var singleChoice = __assign(__assign({}, statements_fixture_1.statementDefaults), {
    result: {
        success: true,
        duration: 'PT0H0M3S',
        response: 'golf',
    },
    object: {
        id: 'http://www.example.com/tincan/activities/uyheHUJd76s/question2',
        objectType: 'Activity',
        definition: {
            name: { 'en-US': 'Question 2' },
            description: { 'en-US': 'Which of these prototypes are available at the beta site?' },
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: ActivityInteractionType_1.default.CHOICE,
            correctResponsesPattern: ['golf[,]tetris'],
            choices: [
                { id: 'golf', description: { 'en-US': 'Golf Example' } },
                { id: 'facebook', description: { 'en-US': 'Facebook App' } },
                { id: 'tetris', description: { 'en-US': 'Tetris Example' } },
                { id: 'scrabble', description: { 'en-US': 'Scrabble Example' } },
            ],
        },
    },
});
exports.singleChoice = singleChoice;
var multipleChoices = lodash_1.merge({}, singleChoice, {
    result: {
        response: 'golf[,]tetris',
    },
});
exports.multipleChoices = multipleChoices;
//# sourceMappingURL=choice-interaction.fixture.js.map