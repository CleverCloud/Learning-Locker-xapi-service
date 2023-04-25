import { ObjectId } from 'mongodb';
export interface MatchFullActivityOptions {
    readonly activityId: string;
    readonly lrsId: ObjectId;
    readonly organisationId: ObjectId;
}
declare const _default: (opts: MatchFullActivityOptions) => {
    organisation: ObjectId;
    lrs_id: ObjectId;
    activityId: string;
};
export default _default;
