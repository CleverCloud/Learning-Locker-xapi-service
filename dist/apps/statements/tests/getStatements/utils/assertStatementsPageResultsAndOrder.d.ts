import ClientModel from '../../../models/ClientModel';
import Service from '../../../serviceFactory/Service';
export declare const assertStatementsPageResultsAndOrder: ({ service, client, expectedPageStatementIds, limit, cursor, isNextPageCheckEnabled, ascending, pageNumber, }: {
    readonly service: Service;
    readonly client: ClientModel;
    readonly expectedPageStatementIds: string[];
    readonly limit?: number | undefined;
    readonly isNextPageCheckEnabled?: boolean | undefined;
    readonly ascending?: boolean | undefined;
    readonly pageNumber?: number | undefined;
    readonly cursor?: string | undefined;
}) => Promise<import("../../../models/StatementsResult").default>;
