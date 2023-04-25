"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("jscommons/dist/expressPresenter/mixins/cors"));
var helmet_1 = __importDefault(require("jscommons/dist/expressPresenter/mixins/helmet"));
var getAbout_1 = __importDefault(require("./getAbout"));
var getFullActivity_1 = __importDefault(require("./getFullActivity"));
var getStatements_1 = __importDefault(require("./getStatements"));
var postStatements_1 = __importDefault(require("./postStatements"));
var putStatement_1 = __importDefault(require("./putStatement"));
exports.default = (function (config) {
    var aboutRouter = express_1.Router();
    aboutRouter.use(cors_1.default());
    aboutRouter.use(helmet_1.default());
    aboutRouter.get('', getAbout_1.default(config));
    var fullActivitiesRouter = express_1.Router();
    fullActivitiesRouter.use(cors_1.default());
    fullActivitiesRouter.use(helmet_1.default());
    fullActivitiesRouter.get('', getFullActivity_1.default(config));
    var statementsRouter = express_1.Router();
    statementsRouter.use(cors_1.default());
    statementsRouter.use(helmet_1.default());
    statementsRouter.get('', getStatements_1.default(config));
    statementsRouter.put('', putStatement_1.default(config));
    statementsRouter.post('', postStatements_1.default(config));
    return { aboutRouter: aboutRouter, fullActivitiesRouter: fullActivitiesRouter, statementsRouter: statementsRouter };
});
//# sourceMappingURL=index.js.map