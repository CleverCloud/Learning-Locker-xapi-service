import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly path: string[];
    constructor(path: string[]);
}
