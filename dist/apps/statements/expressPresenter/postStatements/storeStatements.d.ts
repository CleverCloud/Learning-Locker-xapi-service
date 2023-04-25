import { Response } from 'express';
import { StatementProcessingPriority } from '../../enums/statementProcessingPriority.enum';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
export interface Options {
    readonly config: Config;
    readonly client: ClientModel;
    readonly priority: StatementProcessingPriority;
    readonly bypassQueues: string[];
    readonly body: any;
    readonly attachments: any[];
    readonly res: Response;
}
declare const _default: ({ config, client, priority, bypassQueues, body, attachments, res, }: Options) => Promise<void>;
export default _default;
