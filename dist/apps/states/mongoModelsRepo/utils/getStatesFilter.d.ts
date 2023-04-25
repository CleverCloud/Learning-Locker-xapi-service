import { ObjectId } from 'mongodb';
import Agent from '../../models/Agent';
import ClientModel from '../../models/ClientModel';
export interface Options {
    readonly activityId: string;
    readonly agent: Agent;
    readonly client: ClientModel;
    readonly registration?: string;
}
declare const _default: (opts: Options) => {
    lrs: ObjectId;
    organisation: ObjectId;
    registration?: undefined;
    'agent.mbox': string;
    'agent.mbox_sha1sum'?: undefined;
    'agent.openid'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration: string;
    'agent.mbox': string;
    'agent.mbox_sha1sum'?: undefined;
    'agent.openid'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration?: undefined;
    'agent.mbox_sha1sum': string;
    'agent.mbox'?: undefined;
    'agent.openid'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration: string;
    'agent.mbox_sha1sum': string;
    'agent.mbox'?: undefined;
    'agent.openid'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration?: undefined;
    'agent.openid': string;
    'agent.mbox'?: undefined;
    'agent.mbox_sha1sum'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration: string;
    'agent.openid': string;
    'agent.mbox'?: undefined;
    'agent.mbox_sha1sum'?: undefined;
    'agent.account.homePage'?: undefined;
    'agent.account.name'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration?: undefined;
    'agent.account.homePage': string;
    'agent.account.name': string;
    'agent.mbox'?: undefined;
    'agent.mbox_sha1sum'?: undefined;
    'agent.openid'?: undefined;
    activityId: string;
} | {
    lrs: ObjectId;
    organisation: ObjectId;
    registration: string;
    'agent.account.homePage': string;
    'agent.account.name': string;
    'agent.mbox'?: undefined;
    'agent.mbox_sha1sum'?: undefined;
    'agent.openid'?: undefined;
    activityId: string;
};
export default _default;
