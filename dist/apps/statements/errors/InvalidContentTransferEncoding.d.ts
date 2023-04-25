import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly contentTransferEncoding?: string | undefined;
    constructor(contentTransferEncoding?: string | undefined);
}
