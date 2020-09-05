import {from} from "rxjs";
import {beers} from "../../mock-data/data";
import {filter} from "rxjs/operators";

const beers$ = from(beers).pipe(
	filter(beer => beer.price < 8)
)

// const priceLessThanEight = beer => beer.price < 8
// const beers$ = from(beers).pipe(
// 	filter(priceLessThanEight)
// )

beers$.subscribe(
	beer => console.log(beer),
	error => console.log(error),
	() => console.log(`The stream is over!`)
)
