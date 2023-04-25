import GetProfileContentOptions from '../repoFactory/options/GetStateContentOptions';
import GetProfileContentResult from '../repoFactory/results/GetStateContentResult';
import Config from './Config';
declare const _default: (config: Config) => (opts: GetProfileContentOptions) => Promise<GetProfileContentResult>;
export default _default;
