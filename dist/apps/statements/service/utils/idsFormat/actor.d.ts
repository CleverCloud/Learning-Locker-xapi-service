import Actor from '../../../models/Actor';
import IdFormattedActor from '../../../models/IdFormattedActor';
export interface ActorWithId {
    readonly account?: any;
    readonly mbox?: any;
    readonly mbox_sha1sum?: any;
    readonly openid?: any;
}
export interface ActorWithMembers {
    readonly member?: any[];
}
declare const formatActor: (actor: Actor) => IdFormattedActor;
export default formatActor;
