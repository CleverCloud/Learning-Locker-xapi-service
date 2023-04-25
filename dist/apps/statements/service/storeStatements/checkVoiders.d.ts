import ClientModel from '../../models/ClientModel';
import UnstoredStatementModel from '../../models/UnstoredStatementModel';
import Config from '../Config';
declare const _default: (config: Config, statements: UnstoredStatementModel[], client: ClientModel) => Promise<string[]>;
export default _default;
