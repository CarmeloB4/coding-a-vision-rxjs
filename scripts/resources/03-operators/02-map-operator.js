import {from} from "rxjs";
import {beers} from "../../mock-data/data";
import {filter, map} from "rxjs/operators";

const beers$ = from(beers).pipe(
	map(beer => `${beer.name}: $${beer.price}`)
)

// const printNameAndPriceInHumanReadableForm = beer => `${beer.name}: $${beer.price}`
// const beers$ = from(beers).pipe(
// 	map(printNameAndPriceInHumanReadableForm)
// )

beers$.subscribe(
	beer => console.log(beer),
	error => console.log(error),
	() => console.log(`The stream is over!`)
)
