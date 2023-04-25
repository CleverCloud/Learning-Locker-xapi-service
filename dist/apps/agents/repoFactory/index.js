"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_blob_1 = require("@azure/storage-blob");
var storage_1 = require("@google-cloud/storage");
var client_s3_1 = require("@aws-sdk/client-s3");
var connectToDb_1 = __importDefault(require("jscommons/dist/mongoRepo/utils/connectToDb"));
var config_1 = __importDefault(require("../../../config"));
var logger_1 = __importDefault(require("../../../logger"));
var azureStorageRepo_1 = __importDefault(require("../azureStorageRepo"));
var googleStorageRepo_1 = __importDefault(require("../googleStorageRepo"));
var localStorageRepo_1 = __importDefault(require("../localStorageRepo"));
var mongoAuthRepo_1 = __importDefault(require("../mongoAuthRepo"));
var mongoModelsRepo_1 = __importDefault(require("../mongoModelsRepo"));
var s3StorageRepo_1 = __importDefault(require("../s3StorageRepo"));
var testAuthRepo_1 = __importDefault(require("../testAuthRepo"));
/* istanbul ignore next */
var getAuthRepo = function () {
    switch (config_1.default.repoFactory.authRepoName) {
        case 'test':
            return testAuthRepo_1.default({});
        default:
        case 'mongo':
            return mongoAuthRepo_1.default({
                db: connectToDb_1.default({
                    dbName: config_1.default.mongoModelsRepo.dbName,
                    logger: logger_1.default,
                    url: config_1.default.mongoModelsRepo.url,
                }),
            });
    }
};
/* istanbul ignore next */
var getModelsRepo = function () {
    switch (config_1.default.repoFactory.modelsRepoName) {
        default:
        case 'mongo':
            return mongoModelsRepo_1.default({
                db: connectToDb_1.default({
                    dbName: config_1.default.mongoModelsRepo.dbName,
                    logger: logger_1.default,
                    url: config_1.default.mongoModelsRepo.url,
                }),
            });
    }
};
/* istanbul ignore next */
var getStorageRepo = function () {
    switch (config_1.default.repoFactory.storageRepoName) {
        case 's3':
            return s3StorageRepo_1.default({
                bucketName: config_1.default.s3StorageRepo.bucketName,
                client: new client_s3_1.S3Client(config_1.default.s3StorageRepo.awsConfig),
                subFolder: config_1.default.storageSubFolders.agents,
            });
        case 'google':
            return googleStorageRepo_1.default({
                bucketName: config_1.default.googleStorageRepo.bucketName,
                storage: new storage_1.Storage({
                    keyFilename: config_1.default.googleStorageRepo.keyFileName,
                    projectId: config_1.default.googleStorageRepo.projectId,
                }),
                subFolder: config_1.default.googleStorageRepo.subFolder.replace(/^\//, ''),
            });
        case 'azure': {
            var credential = new storage_blob_1.SharedKeyCredential(config_1.default.azureStorageRepo.account, config_1.default.azureStorageRepo.accountKey);
            var pipeline = storage_blob_1.StorageURL.newPipeline(credential);
            var serviceURL = new storage_blob_1.ServiceURL("https://" + config_1.default.azureStorageRepo.account + ".blob.core.windows.net", pipeline);
            var containerUrl = storage_blob_1.ContainerURL.fromServiceURL(serviceURL, config_1.default.azureStorageRepo.containerName);
            return azureStorageRepo_1.default({
                containerUrl: containerUrl,
                subFolder: config_1.default.azureStorageRepo.subFolder.replace(/^\//, ''),
            });
        }
        default:
        case 'local':
            return localStorageRepo_1.default(config_1.default.localStorageRepo);
    }
};
exports.default = (function () {
    var authRepo = getAuthRepo();
    var modelsRepo = getModelsRepo();
    var storageRepo = getStorageRepo();
    return __assign(__assign(__assign(__assign({}, authRepo), modelsRepo), storageRepo), { clearRepo: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, modelsRepo.clearRepo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, storageRepo.clearRepo()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, migrate: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, modelsRepo.migrate()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, storageRepo.migrate()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, rollback: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, modelsRepo.rollback()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, storageRepo.rollback()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); } });
});
//# sourceMappingURL=index.js.map