import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly unknownParams: string[];
    constructor(unknownParams: string[]);
}
