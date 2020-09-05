// Subscribe to the next observable only when the previous completes.
// It's useful for a sequential processing, e.g. HHTP requests

// Emulate first HTTP request that take 3 sec
import {mapTo} from "rxjs/operators";
import {concat, timer} from "rxjs";

const threeSecHTTPRequest = timer(3000).pipe(
	mapTo(`First response`)
)

// Emulate first HTTP request that take 1 sec
const oneSecHTTPRequest = timer(1000).pipe(
	mapTo(`Second response`)
)

concat(threeSecHTTPRequest, oneSecHTTPRequest)
	.subscribe(response => console.log(response))
