import StoreStatementsOptions from '../../serviceFactory/options/StoreStatementsOptions';
import Config from '../Config';
declare const _default: (config: Config) => ({ models, attachments, client, priority, bypassQueues, }: StoreStatementsOptions) => Promise<string[]>;
export default _default;
