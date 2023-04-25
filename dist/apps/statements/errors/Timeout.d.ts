import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly timeoutMs: number;
    constructor(timeoutMs: number);
}
