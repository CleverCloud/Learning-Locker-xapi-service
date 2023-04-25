import { Request, Response } from 'express';
import Config from '../Config';
export interface Options {
    readonly config: Config;
    readonly req: Request;
    readonly res: Response;
}
declare const _default: ({ config, req, res }: Options) => Promise<void>;
export default _default;
