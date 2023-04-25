import { Response } from 'express';
import ClientModel from '../../../models/ClientModel';
import Config from '../../Config';
export interface Options {
    readonly config: Config;
    readonly res: Response;
    readonly client: ClientModel;
    readonly queryParams: any;
    readonly urlPath: string;
    readonly acceptedLangs: string;
}
declare const _default: ({ config, res, client, queryParams, urlPath, acceptedLangs }: Options) => Promise<void>;
export default _default;
