import Subject from '../Subject';
export default class GroupSubject<T> extends Subject<T> {
    key: string;
    constructor(key: string);
}
