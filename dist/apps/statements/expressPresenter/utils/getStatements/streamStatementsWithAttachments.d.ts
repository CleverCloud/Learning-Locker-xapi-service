import { Writable } from 'stream';
import AttachmentModel from '../../../models/AttachmentModel';
export declare const boundary = "zzzlearninglockerzzz";
declare const _default: (jsonResponse: any, attachments: AttachmentModel[], stream: Writable) => Promise<void>;
export default _default;
