import BaseError from 'jscommons/dist/errors/BaseError';
export default class extends BaseError {
    readonly method?: string | undefined;
    constructor(method?: string | undefined);
}
