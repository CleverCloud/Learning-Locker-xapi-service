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
exports.multipleMatchingQuestions = exports.singleMatchingQuestion = void 0;
var lodash_1 = require("lodash");
var statements_fixture_1 = require("./statements.fixture");
var singleMatchingQuestion = __assign(__assign({}, statements_fixture_1.statementDefaults), {
    result: {
        response: 'ben[.]3',
    },
    object: {
        id: 'http://www.example.com/tincan/activities/uyheHUJd76s/question4',
        objectType: 'Activity',
        definition: {
            name: { 'en-US': 'Question 4' },
            description: { 'en-US': 'Match these people to their kickball team:' },
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: 'matching',
            correctResponsesPattern: ['ben[.]3[,]chris[.]2[,]troy[.]4[,]freddie[.]1'],
            source: [
                {
                    id: 'ben',
                    description: { 'en-US': 'Ben' },
                },
                {
                    id: 'chris',
                    description: { 'en-US': 'Chris' },
                },
                {
                    id: 'troy',
                    description: { 'en-US': 'Troy' },
                },
                {
                    id: 'freddie',
                    description: { 'en-US': 'Freddie' },
                },
            ],
            target: [
                {
                    id: '1',
                    description: { 'en-US': 'SCORM Engine' },
                },
                {
                    id: '2',
                    description: { 'en-US': 'Pure-sewage' },
                },
                {
                    id: '3',
                    description: { 'en-US': 'Tin Can xAPI' },
                },
                {
                    id: '4',
                    description: { 'en-US': 'SCORM Cloud' },
                },
            ],
        },
    },
});
exports.singleMatchingQuestion = singleMatchingQuestion;
var multipleMatchingQuestions = lodash_1.merge({}, singleMatchingQuestion, {
    result: {
        response: 'ben[.]3[,]chris[.]2[,]troy[.]4[,]freddie[.]1',
    },
});
exports.multipleMatchingQuestions = multipleMatchingQuestions;
//# sourceMappingURL=matching-interaction.fixture.js.map