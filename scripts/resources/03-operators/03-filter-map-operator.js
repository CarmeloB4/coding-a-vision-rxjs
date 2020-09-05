import {from} from "rxjs";
import {beers} from "../../mock-data/data";
import {filter, map} from "rxjs/operators";

const priceLessThanEight = beer => beer.price < 8
const printNameAndPriceInHumanReadableForm = beer => `${beer.name}: $${beer.price}`

const beers$ = from(beers).pipe(
	filter(priceLessThanEight),
	map(printNameAndPriceInHumanReadableForm)
)

beers$.subscribe(
	beer => console.log(beer),
	error => console.log(error),
	() => console.log(`The stream is over!`)
)
