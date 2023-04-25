import { StatementProcessingPriority } from '../../../enums/statementProcessingPriority.enum';
import AttachmentModel from '../../../models/AttachmentModel';
import ClientModel from '../../../models/ClientModel';
import UnstoredStatementModel from '../../../models/UnstoredStatementModel';
declare const _default: (models: any[], attachments: AttachmentModel[], client: ClientModel, priority: StatementProcessingPriority, bypassQueues: string[]) => Promise<UnstoredStatementModel[]>;
export default _default;
