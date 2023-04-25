import { ObjectId } from 'mongodb';
import { Opts } from '../Signature';
declare const _default: (options: Opts) => {
    $or?: undefined;
} | {
    $or: ({
        _id: {
            [x: string]: ObjectId;
        };
        stored: Date;
    } | {
        stored: {
            [x: string]: Date;
        };
        _id?: undefined;
    })[];
};
export default _default;
