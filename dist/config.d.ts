import { S3ClientConfig } from '@aws-sdk/client-s3';
declare const _default: {
    defaultTimeout: number;
    isQueuePriorityEnabled: boolean;
    express: {
        allowFormBody: boolean;
        allowUndefinedMethod: boolean;
        bodyParserLimit: string;
        morganDirectory: string;
        port: number;
        xAPIPrefix: string;
    };
    azureStorageRepo: {
        account: string;
        accountKey: string;
        containerName: string;
        subFolder: string;
    };
    googleStorageRepo: {
        bucketName: string;
        keyFileName: string;
        projectId: string;
        subFolder: string;
    };
    lang: string;
    localStorageRepo: {
        storageDir: string;
    };
    mongoModelsRepo: {
        dbName: string;
        url: string;
    };
    redis: {
        prefix: string;
        url: string;
    };
    aws: {
        region: string | undefined;
        accessKeyId: string | undefined;
        secretAccessKey: string | undefined;
    };
    sqs: {
        prefix: string;
    };
    repoFactory: {
        authRepoName: string;
        eventsRepoName: string;
        modelsRepoName: string;
        storageRepoName: string;
    };
    s3StorageRepo: {
        awsConfig: S3ClientConfig;
        bucketName: string;
    };
    statementsService: {
        awaitUpdates: boolean;
        enableActorLowerCasing: boolean;
        enableActivityUpdates: boolean;
        enableAttachmentCreation: boolean;
        enableAttachmentValidation: boolean;
        enableConflictChecks: boolean;
        enableNullRemoval: boolean;
        enableReferencing: boolean;
        enableStatementCreation: boolean;
        enableVoiding: boolean;
        enableVoidingChecks: boolean;
    };
    storageSubFolders: {
        activities: string;
        agents: string;
        state: string;
        statements: string;
    };
    tracker: {
        newRelic: {
            enabled: boolean;
            log: string;
            logLevel: string;
            noConfigFile: string;
        };
    };
    winston: {
        cloudWatch: {
            awsConfig: {
                accessKeyId: string;
                region: string;
                secretAccessKey: string;
            };
            enabled: boolean;
            level: string;
            logGroupName: string;
            logStreamName: string;
        };
        console: {
            level: string;
        };
    };
};
export default _default;
