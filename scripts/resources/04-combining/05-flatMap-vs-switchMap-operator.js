import {interval} from "rxjs";
import {map, switchMap, take} from "rxjs/operators";

const outer$ = interval(1000).pipe(
	take(2)
)

const combined$ = outer$.pipe(
	mergeMap(x => {
		return interval(400).pipe(
			take(3),
			map(y => `outer ${x}: inner ${y}`)
		)
	})
)

combined$.subscribe(response => console.log(`Result: ${response}`))

// const combined2$ = outer$.pipe(
// 	switchMap(x => {
// 		return interval(400).pipe(
// 			take(3),
// 			map(y => `outer ${x}: inner ${y}`)
// 		)
// 	})
// )
//
// combined2$.subscribe(response => console.log(`Result: ${response}`))
