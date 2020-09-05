import { interval } from 'rxjs'
import {share, take} from 'rxjs/operators'

// //<editor-fold desc="Iteration 1">
// 	const numbers$ = interval(1000).pipe(
// 		take(5)
// 	)
//
// 		function subscribeToNumbers(name) {
// 			numbers$
// 				.subscribe(x => console.log(`${name} got ${x}`))
// 		}
//
// 		subscribeToNumbers('Subscriber 1')
// 		subscribeToNumbers('Subscriber 2')
// //</editor-fold>

// //<editor-fold desc="Iteration 2">
// const numbers$ = interval(1000).pipe(
// 	take(5)
// )
//
// function subscribeToNumbers(name) {
// 	numbers$
// 		.subscribe(x => console.log(`${name} got ${x}`))
// }
//
// subscribeToNumbers('Subscriber 1')
// const subscription2 = () => subscribeToNumbers('Subscriber 2')
//
// setTimeout(subscription2, 2500)
// //</editor-fold>

//<editor-fold desc="Iteration 3">
const numbers$ = interval(1000).pipe(
	take(5),
	share()
)

function subscribeToNumbers(name) {
	numbers$
		.subscribe(x => console.log(`${name} got ${x}`))
}

subscribeToNumbers('Subscriber 1')
const subscription2 = () => subscribeToNumbers('Subscriber 2')

setTimeout(subscription2, 2500)
//</editor-fold>

