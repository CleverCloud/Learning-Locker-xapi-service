import Member from 'jscommons/dist/utils/Member';
import ClientModel from '../../../models/ClientModel';
export interface Opts {
    readonly id: string;
    readonly client: ClientModel;
}
declare type Signature = Member<Opts, string>;
export default Signature;
