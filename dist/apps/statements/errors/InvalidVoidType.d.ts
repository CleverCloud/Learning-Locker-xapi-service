import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly objectType: string;
    constructor(objectType: string);
}
