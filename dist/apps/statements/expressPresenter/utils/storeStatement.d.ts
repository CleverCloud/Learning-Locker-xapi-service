import { Response } from 'express';
import { StatementProcessingPriority } from '../../enums/statementProcessingPriority.enum';
import AttachmentModel from '../../models/AttachmentModel';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
export interface Options {
    readonly config: Config;
    readonly priority: StatementProcessingPriority;
    readonly bypassQueues: string[];
    readonly body: any;
    readonly attachments: AttachmentModel[];
    readonly client: ClientModel;
    readonly statementId?: string;
    readonly res: Response;
}
declare const _default: ({ config, priority, bypassQueues, body, attachments, client, statementId, res, }: Options) => Promise<void>;
export default _default;
