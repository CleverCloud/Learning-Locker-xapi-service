"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app_1 = __importDefault(require("./activities/app"));
var app_2 = __importDefault(require("./agents/app"));
var app_3 = __importDefault(require("./statements/app"));
var app_4 = __importDefault(require("./states/app"));
exports.default = (function (appConfig) {
    var router = express_1.Router();
    var activitiesRouter = app_1.default({
        logger: appConfig.logger,
        presenter: {
            express: {
                bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
                morganDirectory: appConfig.presenter.express.morganDirectory,
            },
        },
        repo: {
            factory: appConfig.repo.repoFactory,
            azure: appConfig.repo.azure,
            google: appConfig.repo.google,
            local: appConfig.repo.local,
            mongo: appConfig.repo.mongo,
            s3: appConfig.repo.s3,
            storageSubFolder: appConfig.repo.storageSubFolders.activities,
        },
        tracker: appConfig.tracker,
    });
    var agentsRouter = app_2.default({
        logger: appConfig.logger,
        presenter: {
            express: {
                bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
                morganDirectory: appConfig.presenter.express.morganDirectory,
            },
        },
        repo: {
            factory: appConfig.repo.repoFactory,
            azure: appConfig.repo.azure,
            google: appConfig.repo.google,
            local: appConfig.repo.local,
            mongo: appConfig.repo.mongo,
            s3: appConfig.repo.s3,
            storageSubFolder: appConfig.repo.storageSubFolders.agents,
        },
        tracker: appConfig.tracker,
    });
    var statesRouter = app_4.default({
        logger: appConfig.logger,
        presenter: {
            express: {
                bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
                morganDirectory: appConfig.presenter.express.morganDirectory,
            },
        },
        repo: {
            factory: appConfig.repo.repoFactory,
            azure: appConfig.repo.azure,
            google: appConfig.repo.google,
            local: appConfig.repo.local,
            mongo: appConfig.repo.mongo,
            s3: appConfig.repo.s3,
            storageSubFolder: appConfig.repo.storageSubFolders.state,
        },
        tracker: appConfig.tracker,
    });
    var statementsRouter = app_3.default({
        logger: appConfig.logger,
        presenter: {
            express: {
                allowFormBody: appConfig.presenter.express.allowFormBody,
                allowUndefinedMethod: appConfig.presenter.express.allowUndefinedMethod,
                bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
                morganDirectory: appConfig.presenter.express.morganDirectory,
            },
        },
        repo: {
            factory: appConfig.repo.repoFactory,
            azure: appConfig.repo.azure,
            google: appConfig.repo.google,
            local: appConfig.repo.local,
            mongo: appConfig.repo.mongo,
            redis: appConfig.repo.redis,
            sqs: appConfig.repo.sqs,
            s3: appConfig.repo.s3,
            storageSubFolder: appConfig.repo.storageSubFolders.statements,
        },
        service: appConfig.service.statements,
        tracker: appConfig.tracker,
    });
    var xAPIPrefix = appConfig.presenter.express.xAPIPrefix;
    router.use(xAPIPrefix + "/xAPI/activities/profile", activitiesRouter);
    router.use(xAPIPrefix + "/xAPI/activities/state", statesRouter);
    router.use(xAPIPrefix + "/xAPI/agents", agentsRouter);
    router.use(xAPIPrefix + "/xAPI/about", statementsRouter.aboutRouter);
    router.use(xAPIPrefix + "/xAPI/activities", statementsRouter.fullActivitiesRouter);
    router.use(xAPIPrefix + "/xAPI/statements", statementsRouter.statementsRouter);
    return router;
});
//# sourceMappingURL=app.js.map