"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expressPresenter_1 = __importDefault(require("./expressPresenter"));
var factory_1 = __importDefault(require("./repo/factory"));
var service_1 = __importDefault(require("./service"));
var en_1 = __importDefault(require("./translatorFactory/en"));
exports.default = (function (appConfig) {
    var translator = en_1.default;
    var repo = factory_1.default({
        auth: {
            factoryName: appConfig.repo.factory.authRepoName,
            mongo: {
                db: appConfig.repo.mongo.db,
            },
            test: {},
        },
        models: {
            factoryName: appConfig.repo.factory.modelsRepoName,
            mongo: {
                db: appConfig.repo.mongo.db,
            },
        },
        storage: {
            factoryName: appConfig.repo.factory.storageRepoName,
            azure: {
                account: appConfig.repo.azure.account,
                accountKey: appConfig.repo.azure.accountKey,
                containerName: appConfig.repo.azure.containerName,
                subFolder: appConfig.repo.storageSubFolder,
            },
            google: {
                bucketName: appConfig.repo.google.bucketName,
                keyFileName: appConfig.repo.google.keyFileName,
                projectId: appConfig.repo.google.projectId,
                subFolder: appConfig.repo.storageSubFolder,
            },
            local: {
                storageDir: appConfig.repo.local.storageDir + "/" + appConfig.repo.storageSubFolder,
            },
            s3: {
                awsConfig: appConfig.repo.s3.awsConfig,
                bucketName: appConfig.repo.s3.bucketName,
                subFolder: appConfig.repo.storageSubFolder,
            },
        },
    });
    var service = service_1.default({ repo: repo });
    var presenter = expressPresenter_1.default({
        bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
        customRoute: 'xAPI/activities/state/status',
        customRouteText: 'ok',
        logger: appConfig.logger,
        morganDirectory: appConfig.presenter.express.morganDirectory,
        service: service,
        tracker: appConfig.tracker,
        translator: translator,
    });
    return presenter;
});
//# sourceMappingURL=app.js.map