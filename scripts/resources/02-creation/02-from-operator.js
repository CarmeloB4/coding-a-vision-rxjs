import {from} from "rxjs";
import {beers} from "../../mock-data/data";

from(beers)
.subscribe(
	beer => console.log(beer),
	error => console.error(error),
	() => console.log('Streaming is over!')
)
