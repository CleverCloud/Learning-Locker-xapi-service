import ClientModel from '../../../../models/ClientModel';
import FacadeConfig from './FacadeConfig';
export interface Options {
    readonly config: FacadeConfig;
    readonly query: Record<string, unknown>;
    readonly project: Record<string, unknown>;
    readonly client: ClientModel;
}
declare const _default: ({ config, query, project, client }: Options) => Promise<import("bson").Document[]>;
export default _default;
