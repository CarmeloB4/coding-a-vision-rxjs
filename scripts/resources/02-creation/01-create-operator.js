import {Observable} from "rxjs";
import {beers} from "../../mock-data/data";

function getData() {
	return new Observable(observer => {
		beers.forEach(beer => observer.next(beer))
		observer.complete()
	})
}

getData().subscribe(
	beer => console.log(`Subscriber got ${beer.name}`),
	error => console.error(error),
	() => console.log('The stream is over')
)
