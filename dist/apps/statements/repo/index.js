"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repoFactoryConfig = void 0;
var config_1 = __importDefault(require("../../../config"));
var factory_1 = __importDefault(require("./factory"));
var connectToMongoDb_1 = __importDefault(require("./utils/connectToMongoDb"));
var connectToRedis_1 = __importDefault(require("./utils/connectToRedis"));
exports.repoFactoryConfig = {
    auth: {
        facade: config_1.default.repoFactory.authRepoName,
        fake: {},
        mongo: {
            db: connectToMongoDb_1.default,
        },
    },
    events: {
        facade: config_1.default.repoFactory.eventsRepoName,
        redis: {
            client: connectToRedis_1.default(),
            prefix: config_1.default.redis.prefix,
            isQueuePriorityEnabled: config_1.default.isQueuePriorityEnabled,
        },
    },
    models: {
        facade: config_1.default.repoFactory.modelsRepoName,
        mongo: {
            db: connectToMongoDb_1.default,
            maxTimeMs: config_1.default.defaultTimeout,
        },
    },
    storage: {
        facade: config_1.default.repoFactory.storageRepoName,
        local: {
            storageDir: config_1.default.localStorageRepo.storageDir,
        },
        s3: {
            awsConfig: config_1.default.s3StorageRepo.awsConfig,
            bucketName: config_1.default.s3StorageRepo.bucketName,
            subFolder: config_1.default.storageSubFolders.statements,
        },
        google: {
            bucketName: config_1.default.googleStorageRepo.bucketName,
            keyFileName: config_1.default.googleStorageRepo.keyFileName,
            projectId: config_1.default.googleStorageRepo.projectId,
            subFolder: config_1.default.googleStorageRepo.subFolder,
        },
        azure: {
            account: config_1.default.azureStorageRepo.account,
            accountKey: config_1.default.azureStorageRepo.accountKey,
            containerName: config_1.default.azureStorageRepo.containerName,
            subFolder: config_1.default.azureStorageRepo.subFolder,
        },
    },
};
var repo = factory_1.default(exports.repoFactoryConfig);
exports.default = repo;
//# sourceMappingURL=index.js.map