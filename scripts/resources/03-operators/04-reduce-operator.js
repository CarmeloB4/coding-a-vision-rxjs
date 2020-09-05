import {from} from "rxjs";
import {beers} from "../../mock-data/data";
import {filter, map, reduce} from "rxjs/operators";

// Demonstrate the use of the reduce operator
const beers$ = from(beers).pipe(
	reduce(((acc, beer) => acc += beer.price), 0)
)

// Demonstrate the use of the map + reduce operators working togheter
// const beers$ = from(beers).pipe(
// 	map(beer => beer.price),
// 	reduce(((acc, price) => acc += price), 0)
// )

beers$.subscribe(
	total => console.log(`Total is ${total}`),
	error => console.log(error),
	() => console.log(`The stream is over!`)
)
