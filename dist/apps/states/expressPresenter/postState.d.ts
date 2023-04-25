/// <reference types="qs" />
import { Request, Response } from 'express';
import Config from './Config';
declare const _default: (config: Config) => (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
export default _default;
