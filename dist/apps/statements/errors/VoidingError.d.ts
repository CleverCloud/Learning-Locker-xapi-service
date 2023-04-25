import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly voidedStatementIds: string[];
    constructor(voidedStatementIds: string[]);
}
