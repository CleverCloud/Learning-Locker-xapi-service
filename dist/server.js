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
var sourceMapSupport = __importStar(require("source-map-support"));
sourceMapSupport.install();
var tracker_1 = __importDefault(require("./tracker")); // eslint-disable-line import/order
var express_1 = __importDefault(require("express"));
var handleListen_1 = __importDefault(require("jscommons/dist/expressPresenter/utils/handleListen"));
var app_1 = __importDefault(require("./apps/app"));
var config_1 = __importDefault(require("./config"));
var logger_1 = __importDefault(require("./logger"));
var connectToMongoDb_1 = __importDefault(require("./utils/connectToMongoDb"));
var connectToRedis_1 = __importDefault(require("./utils/connectToRedis"));
var connectToSQS_1 = __importDefault(require("./utils/connectToSQS"));
var expressApp = express_1.default();
expressApp.use(app_1.default({
    logger: logger_1.default,
    presenter: {
        express: config_1.default.express,
    },
    repo: {
        azure: config_1.default.azureStorageRepo,
        google: config_1.default.googleStorageRepo,
        local: config_1.default.localStorageRepo,
        mongo: {
            db: connectToMongoDb_1.default,
            maxTimeMs: config_1.default.defaultTimeout,
        },
        redis: {
            client: connectToRedis_1.default(),
            prefix: config_1.default.redis.prefix,
            isQueuePriorityEnabled: config_1.default.isQueuePriorityEnabled,
        },
        sqs: {
            client: connectToSQS_1.default(),
            prefix: config_1.default.sqs.prefix,
            isQueuePriorityEnabled: config_1.default.isQueuePriorityEnabled,
        },
        repoFactory: config_1.default.repoFactory,
        s3: config_1.default.s3StorageRepo,
        storageSubFolders: config_1.default.storageSubFolders,
    },
    service: {
        statements: config_1.default.statementsService,
    },
    tracker: tracker_1.default,
}));
expressApp.listen(config_1.default.express.port, function () {
    var port80 = 80;
    if (config_1.default.express.port === port80) {
        logger_1.default.warn('Express port set to 80; this will not work on non-root Node processes');
    }
    logger_1.default.info("Listening on port " + config_1.default.express.port);
    handleListen_1.default(logger_1.default);
});
//# sourceMappingURL=server.js.map