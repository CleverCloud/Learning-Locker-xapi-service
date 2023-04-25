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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var mongodb_1 = require("mongodb");
var matchesCursorOption_1 = __importDefault(require("./matchesCursorOption"));
describe('mongo matchesCursorOption', function () {
    it('should return cursor properly', function () {
        var testId = '5bae32485e331207f3d8e005';
        var testStored = new Date();
        var cursor = testId + "_" + testStored.toISOString();
        assert.deepStrictEqual(matchesCursorOption_1.default({ cursor: undefined }), {});
        assert.deepStrictEqual(matchesCursorOption_1.default({ cursor: cursor, ascending: true }), {
            $or: [
                {
                    _id: { $gte: new mongodb_1.ObjectId(testId) },
                    stored: testStored,
                },
                { stored: { $gt: testStored } },
            ],
        });
        assert.deepStrictEqual(matchesCursorOption_1.default({ cursor: cursor, ascending: false }), {
            $or: [
                {
                    _id: {
                        $lte: new mongodb_1.ObjectId(testId),
                    },
                    stored: testStored,
                },
                {
                    stored: {
                        $lt: testStored,
                    },
                },
            ],
        });
    });
});
//# sourceMappingURL=matchesCursorOption.test.js.map