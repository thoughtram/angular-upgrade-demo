import Observable from '../Observable';
import VirtualTimeScheduler from './VirtualTimeScheduler';
import Notification from '../Notification';
import Subject from '../Subject';
export default class TestScheduler extends VirtualTimeScheduler {
    assertDeepEqual: (actual: any, expected: any) => boolean | void;
    constructor(assertDeepEqual: (actual: any, expected: any) => boolean | void);
    createColdObservable(marbles: string, values?: any, error?: any): any;
    createHotObservable(marbles: string, values?: any, error?: any): Subject<{}>;
    flushTests: ({
        observable: Observable<any>;
        marbles: string;
        actual?: any[];
        expected?: any[];
        ready: boolean;
    })[];
    expect(observable: Observable<any>): ({
        toBe: (marbles: string, values?: any, errorValue?: any) => void;
    });
    flush(): void;
    static parseMarbles(marbles: string, values?: any, errorValue?: any): ({
        notification: Notification<any>;
        frame: number;
    })[];
}
