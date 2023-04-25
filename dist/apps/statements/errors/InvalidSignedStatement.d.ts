import BaseError from 'jscommons/dist/errors/BaseError';
import Statement from '../models/Statement';
export default class extends BaseError {
    readonly originalStatement: Statement;
    readonly decodedStatement: unknown;
    constructor(originalStatement: Statement, decodedStatement: unknown);
}
