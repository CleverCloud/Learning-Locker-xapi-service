import Member from 'jscommons/dist/utils/Member';
import { StatementProcessingPriority } from '../../../enums/statementProcessingPriority.enum';
export interface Opts {
    readonly statementProperties: string[];
    readonly priority: StatementProcessingPriority;
}
declare type Signature = Member<Opts, void>;
export default Signature;
