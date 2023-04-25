import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly method: string;
    constructor(method: string);
}
