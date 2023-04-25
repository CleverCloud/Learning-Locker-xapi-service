import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
export interface Options {
    readonly agent: Agent;
    readonly client: ClientModel;
    readonly profileId: string;
}
declare const _default: (opts: Options) => {
    profileId: string;
    lrs: import("bson").ObjectID;
    organisation: import("bson").ObjectID;
    'agent.mbox': string;
    'agent.mbox_sha1sum'?: undefined;
    'agent.openid'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
} | {
    profileId: string;
    lrs: import("bson").ObjectID;
    organisation: import("bson").ObjectID;
    'agent.mbox_sha1sum': string;
    'agent.mbox'?: undefined;
    'agent.openid'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
} | {
    profileId: string;
    lrs: import("bson").ObjectID;
    organisation: import("bson").ObjectID;
    'agent.openid': string;
    'agent.mbox'?: undefined;
    'agent.mbox_sha1sum'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
} | {
    profileId: string;
    lrs: import("bson").ObjectID;
    organisation: import("bson").ObjectID;
    'agent.account.homePage': string;
    'agent.account.name': string;
    'agent.mbox'?: undefined;
    'agent.mbox_sha1sum'?: undefined;
    'agent.openid'?: undefined;
};
export default _default;
