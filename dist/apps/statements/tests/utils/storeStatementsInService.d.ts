import { StatementProcessingPriority } from '../../enums/statementProcessingPriority.enum';
import ClientModel from '../../models/ClientModel';
import Service from '../../serviceFactory/Service';
declare const _default: (service: Service) => (statements: any[], attachments?: any[], client?: ClientModel, priority?: StatementProcessingPriority, bypassQueues?: string[]) => Promise<string[]>;
export default _default;
