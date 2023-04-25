import { Dictionary } from 'lodash';
import ClientModel from '../../../models/ClientModel';
import UnstoredStatementModel from '../../../models/UnstoredStatementModel';
import Config from '../../Config';
declare const _default: (config: Config, models: UnstoredStatementModel[], client: ClientModel) => Promise<Dictionary<string[]>>;
export default _default;
