import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly hashes: string[];
    constructor(hashes: string[]);
}
