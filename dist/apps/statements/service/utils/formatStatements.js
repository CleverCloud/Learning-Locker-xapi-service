"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var statement_1 = __importDefault(require("./canonicalFormat/statement"));
var statement_2 = __importDefault(require("./idsFormat/statement"));
exports.default = (function (models, format, langs) {
    switch (format) {
        case 'ids':
            return models.map(function (model) {
                return statement_2.default(model.statement);
            });
        case 'canonical':
            return models.map(function (model) {
                return statement_1.default(model.statement, langs);
            });
        case 'exact':
        default:
            return models.map(function (model) {
                return model.statement;
            });
    }
});
//# sourceMappingURL=formatStatements.js.map