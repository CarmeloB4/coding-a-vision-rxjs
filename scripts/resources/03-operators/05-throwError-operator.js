// RxJS v6+
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {beers} from "../../mock-data/data";
//emit error
// const source = throwError('This is an error!');

//gracefully handle error, returning observable with error message
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));

//output: 'I caught: This is an error'
const subscribe = example.subscribe(val => console.log(val));

// Example
// //<editor-fold desc="Throw Error Example">
// function getData() {
// 	return new Observable(observer => {
// 		let counter = 0
// 		beers.forEach(beer => {
// 			observer.next(beer)
// 			counter++
//
// 			if (counter > Math.random() * 5) {	// Randomly generate an error
// 				observer.error({
// 					status: 500,
// 					description: 'Beer stream error'
// 				})
// 			} else {
// 				emulateDelayInSeconds(1)
// 			}
// 		})
// 		observer.complete()
// 	})
// }
//
// // Subscribing to data from the primary source
// getData().pipe(
// 	catchError(error => {
// 		console.error(`Got ${error.status}: ${error.description}`)
// 		if (error.status === 500) {
// 			console.error(`>>> Switching to retrieving cached data`)
// 			return getCachedData()
// 		} else {
// 			console.error(`>>> Switching to another data source`)
// 			return getDataFromAnotherDataSource()
// 		}
// 	}),
// 	map(beer => `${beer.name}: ${beer.country}`)
// )
// 	.subscribe(
// 		beer => console.log(`Subscriber got ${beer}`),
// 		error => console.log(error),
// 		() => console.log(`The stream is over`)
// 	)
//
// // getCachedData function
// function getCachedData() {
// 	return new Observable(observer => {
// 		beers.forEach(beer => {
// 			observer.next(beer)
// 			emulateDelayInSeconds(1)
// 		})
// 		observer.complete()
// 	})
// }
//
// // getDataFromAnotherService function
// function getDataFromAnotherDataSource() {
// 	return new Observable(observer => {
// 		beers.forEach(beer => {
// 			observer.next(beer)
// 			emulateDelayInSeconds(1)
// 		})
// 		observer.complete()
// 	})
// }
//
// function emulateDelayInSeconds(seconds) {
// 	let e = new Date().getTime() + (seconds * 1000);
// 	while (new Date().getTime() <= e) {
// 	} // just to keep the CPU busy
// }
//
// //</editor-fold>

