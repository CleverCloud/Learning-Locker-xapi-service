import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly contentType: string;
    constructor(contentType: string);
}
