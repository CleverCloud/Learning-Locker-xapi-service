import Actor from '../../../models/Actor';
import Group from '../../../models/Group';
import Statement from '../../../models/Statement';
import StatementBase from '../../../models/StatementBase';
export declare const getActorIdents: (actor: Actor) => string[];
export declare const getGroupIdents: (group: Group) => string[];
export declare const getAgentsFromStatement: (statement: StatementBase) => string[];
export declare const getRelatedAgentsFromStatement: (statement: Statement) => string[];
