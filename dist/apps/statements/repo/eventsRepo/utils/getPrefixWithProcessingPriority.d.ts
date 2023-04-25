import { StatementProcessingPriority } from '../../../enums/statementProcessingPriority.enum';
export declare const getPrefixWithProcessingPriority: (originalPrefix: string, priority: StatementProcessingPriority, isQueuePriorityEnabled?: boolean | undefined) => string;
