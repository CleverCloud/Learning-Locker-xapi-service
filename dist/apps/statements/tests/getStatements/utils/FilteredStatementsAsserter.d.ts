import GetStatementsOptions from '../../../serviceFactory/options/GetStatementsOptions';
import Service from '../../../serviceFactory/Service';
declare type FilteredStatementsAsserter = (service: Service) => (opts: GetStatementsOptions, expectedIds: string[]) => Promise<void>;
export default FilteredStatementsAsserter;
