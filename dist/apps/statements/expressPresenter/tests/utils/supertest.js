"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var supertest_1 = __importDefault(require("supertest"));
var config_1 = __importDefault(require("../../../../../config"));
var logger_1 = __importDefault(require("../../../../../logger"));
var tracker_1 = __importDefault(require("../../../../../tracker"));
var translatorFactory_1 = __importDefault(require("../../../translatorFactory"));
var constants_1 = require("../../../utils/constants");
var testService_1 = __importDefault(require("../../../utils/testService"));
var index_1 = __importDefault(require("../../index"));
var app = express_1.default();
var translator = translatorFactory_1.default();
var presenter = index_1.default({
    allowFormBody: config_1.default.express.allowFormBody,
    allowUndefinedMethod: config_1.default.express.allowUndefinedMethod,
    llClientInfoEndpoint: '',
    bodyParserLimit: config_1.default.express.bodyParserLimit,
    customRoute: 'xAPI/statements/status',
    customRouteText: 'ok',
    logger: logger_1.default,
    morganDirectory: config_1.default.express.morganDirectory,
    service: testService_1.default,
    tracker: tracker_1.default,
    translator: translator,
});
app.use(constants_1.statementsRoute, presenter.statementsRouter);
exports.default = supertest_1.default(app);
//# sourceMappingURL=supertest.js.map