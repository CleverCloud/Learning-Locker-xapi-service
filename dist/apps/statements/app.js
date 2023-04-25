"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var expressPresenter_1 = __importDefault(require("./expressPresenter"));
var facade_1 = __importDefault(require("./repo/facade"));
var service_1 = __importDefault(require("./service"));
var en_1 = __importDefault(require("./translatorFactory/en"));
exports.default = (function (appConfig) {
    var translator = en_1.default;
    var repo = facade_1.default({
        auth: {
            facade: appConfig.repo.factory.authRepoName,
            fake: {},
            mongo: {
                db: appConfig.repo.mongo.db,
            },
        },
        events: {
            facade: appConfig.repo.factory.eventsRepoName,
            redis: {
                client: appConfig.repo.redis.client,
                prefix: appConfig.repo.redis.prefix,
                isQueuePriorityEnabled: appConfig.repo.redis.isQueuePriorityEnabled,
            },
            sqs: {
                client: appConfig.repo.sqs.client,
                prefix: appConfig.repo.sqs.prefix,
                isQueuePriorityEnabled: appConfig.repo.sqs.isQueuePriorityEnabled,
            },
        },
        models: {
            facade: appConfig.repo.factory.modelsRepoName,
            mongo: {
                db: appConfig.repo.mongo.db,
                maxTimeMs: appConfig.repo.mongo.maxTimeMs,
            },
        },
        storage: {
            facade: appConfig.repo.factory.storageRepoName,
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
    var service = service_1.default({
        awaitUpdates: appConfig.service.awaitUpdates,
        enableActorLowerCasing: appConfig.service.enableActorLowerCasing,
        enableActivityUpdates: appConfig.service.enableActivityUpdates,
        enableAttachmentCreation: appConfig.service.enableAttachmentCreation,
        enableAttachmentValidation: appConfig.service.enableAttachmentValidation,
        enableConflictChecks: appConfig.service.enableConflictChecks,
        enableNullRemoval: appConfig.service.enableNullRemoval,
        enableReferencing: appConfig.service.enableReferencing,
        enableStatementCreation: appConfig.service.enableStatementCreation,
        enableVoiding: appConfig.service.enableVoiding,
        enableVoidingChecks: appConfig.service.enableVoidingChecks,
        logger: appConfig.logger,
        repo: repo,
        tracker: appConfig.tracker,
    });
    return expressPresenter_1.default({
        allowFormBody: appConfig.presenter.express.allowFormBody,
        allowUndefinedMethod: appConfig.presenter.express.allowUndefinedMethod,
        bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
        customRoute: 'xAPI/statements/status',
        customRouteText: 'ok',
        llClientInfoEndpoint: '',
        logger: appConfig.logger,
        morganDirectory: appConfig.presenter.express.morganDirectory,
        service: service,
        tracker: appConfig.tracker,
        translator: translator,
    });
});
//# sourceMappingURL=app.js.map