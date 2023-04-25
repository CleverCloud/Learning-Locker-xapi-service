import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly targetId: string;
    constructor(targetId: string);
}
