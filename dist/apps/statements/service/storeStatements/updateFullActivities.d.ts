import ClientModel from '../../models/ClientModel';
import UnstoredStatementModel from '../../models/UnstoredStatementModel';
import Config from '../Config';
export interface Opts {
    readonly config: Config;
    readonly models: UnstoredStatementModel[];
    readonly client: ClientModel;
}
declare const _default: ({ config, models, client }: Opts) => Promise<void>;
export default _default;
