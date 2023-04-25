"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIdsSubStatement_1 = __importDefault(require("../../utils/createIdsSubStatement"));
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var verbFormatTest_1 = __importDefault(require("./utils/verbFormatTest"));
describe('get ids statement in verb', function () {
    verbFormatTest_1.default(function (verb) {
        return { verb: verb };
    });
});
describe('get ids statement in sub statement verb', function () {
    verbFormatTest_1.default(function (verb) {
        return createSubStatement_1.default({ verb: verb });
    }, function (verb) {
        return createIdsSubStatement_1.default({ verb: verb });
    });
});
//# sourceMappingURL=verb.test.js.map