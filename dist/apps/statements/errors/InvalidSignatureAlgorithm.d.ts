import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly statementId: string;
    readonly algorithm: string;
    constructor(statementId: string, algorithm: string);
}
