import Member from 'jscommons/dist/utils/Member';
import FullActivityDatabase from '../../../models/FullActivityDatabase';
export interface Opts {
    readonly fullActivities: FullActivityDatabase[];
}
declare type Signature = Member<Opts, void>;
export default Signature;
