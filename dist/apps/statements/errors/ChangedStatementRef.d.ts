import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly statementId: string;
    constructor(statementId: string);
}
