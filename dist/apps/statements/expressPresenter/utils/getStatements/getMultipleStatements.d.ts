import { Response } from 'express';
import ClientModel from '../../../models/ClientModel';
import Config from '../../Config';
export interface Options {
    readonly config: Config;
    readonly res: Response;
    readonly queryParams: any;
    readonly client: ClientModel;
    readonly urlPath: string;
    readonly langs: string[];
}
declare const _default: (opts: Options) => Promise<void>;
export default _default;
