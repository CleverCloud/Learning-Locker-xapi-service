"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_blob_1 = require("@azure/storage-blob");
var storage_1 = require("@google-cloud/storage");
var client_s3_1 = require("@aws-sdk/client-s3");
var azureStorageRepo_1 = __importDefault(require("../../azureStorageRepo"));
var googleStorageRepo_1 = __importDefault(require("../../googleStorageRepo"));
var localStorageRepo_1 = __importDefault(require("../../localStorageRepo"));
var s3StorageRepo_1 = __importDefault(require("../../s3StorageRepo"));
exports.default = (function (factoryConfig) {
    switch (factoryConfig.factoryName) {
        case 's3':
            return s3StorageRepo_1.default({
                bucketName: factoryConfig.s3.bucketName,
                client: new client_s3_1.S3Client(factoryConfig.s3.awsConfig),
                subFolder: factoryConfig.s3.subFolder,
            });
        case 'google':
            return googleStorageRepo_1.default({
                bucketName: factoryConfig.google.bucketName,
                storage: new storage_1.Storage({
                    keyFilename: factoryConfig.google.keyFileName,
                    projectId: factoryConfig.google.projectId,
                }),
                subFolder: factoryConfig.google.subFolder.replace(/^\//, ''),
            });
        case 'azure': {
            var credential = new storage_blob_1.SharedKeyCredential(factoryConfig.azure.account, factoryConfig.azure.accountKey);
            var pipeline = storage_blob_1.StorageURL.newPipeline(credential);
            var serviceURL = new storage_blob_1.ServiceURL("https://" + factoryConfig.azure.account + ".blob.core.windows.net", pipeline);
            var containerUrl = storage_blob_1.ContainerURL.fromServiceURL(serviceURL, factoryConfig.azure.containerName);
            return azureStorageRepo_1.default({
                containerUrl: containerUrl,
                subFolder: factoryConfig.azure.subFolder.replace(/^\//, ''),
            });
        }
        default:
        case 'local': {
            return localStorageRepo_1.default({
                storageDir: factoryConfig.local.storageDir,
            });
        }
    }
});
//# sourceMappingURL=factory.js.map