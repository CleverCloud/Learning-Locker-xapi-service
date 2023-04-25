import StatementsResult from '../../../models/StatementsResult';
import GetStatementsOptions from '../../../serviceFactory/options/GetStatementsOptions';
import StatementsResultOptions from '../../../serviceFactory/options/StatementsResultOptions';
export interface MoreLinkOptions {
    readonly results: StatementsResult;
    readonly statementsOpts: Partial<GetStatementsOptions>;
    readonly resultOpts: StatementsResultOptions;
    readonly urlPath: string;
}
declare const _default: (opts: MoreLinkOptions) => string;
export default _default;
