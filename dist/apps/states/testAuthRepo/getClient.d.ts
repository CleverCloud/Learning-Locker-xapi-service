import GetClientOptions from '../repoFactory/options/GetClientOptions';
import GetClientResult from '../repoFactory/results/GetClientResult';
import Config from './Config';
declare const _default: (_config: Config) => (opts: GetClientOptions) => Promise<GetClientResult>;
export default _default;
