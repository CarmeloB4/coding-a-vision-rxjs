import {interval} from "rxjs";

// Generate an infinite stream of numbers every 1000 milliseconds
const interval$ = interval(1000);

// Print the emitted values
interval$.subscribe(val => console.log(val))
