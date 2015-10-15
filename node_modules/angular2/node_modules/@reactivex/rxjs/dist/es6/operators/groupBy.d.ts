import Observable from '../Observable';
import GroupSubject from '../subjects/GroupSubject';
export default function groupBy<T, R>(keySelector: (value: T) => string, elementSelector?: (value: T) => R, durationSelector?: (grouped: GroupSubject<R>) => Observable<any>): Observable<GroupSubject<R>>;
