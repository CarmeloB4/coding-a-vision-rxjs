import {Subject} from "rxjs";

const subject$ = new Subject();

const sub1 = subject$
	.subscribe(x => console.log(`Subscriber 1 got ${x}`))

const sub2 = subject$
	.subscribe(x => console.log(`Subscriber 2 got ${x}`))

subject$.next(123)

sub2.unsubscribe()

subject$.next(456)
