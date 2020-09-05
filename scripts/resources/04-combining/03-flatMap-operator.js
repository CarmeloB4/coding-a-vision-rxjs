// The flatMap operator allows to flatten nested observables.
//------------------------------------//
// - Eliminates the need to write nested subscribe()
// - Handles every value emitted by an observable as another observable
// - Auto-subscribe to the internal observable and unwraps its values

import {from, Observable} from "rxjs";
import {flatMap} from 'rxjs/operators'
import {beers, softDrinks} from "../../mock-data/data";

function getDrinks() {
	const beers$ = from(beers)
	const softDrinks$ = from(softDrinks);

	return new Observable(observer => {
		observer.next(beers$)
		observer.next(softDrinks$)

		observer.complete()
	})
}

getDrinks().pipe(
	flatMap(drinks => drinks)
).subscribe(drink => console.log(`Subscriber got ${drink.name}: $${drink.price}`))
