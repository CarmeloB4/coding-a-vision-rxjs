```javascript
// Declare three data sources
function getData(): Observable {...}  // data source 1

function getCachedData(): Observable {...}  // data source 2

function getDataFromAnotherService(): Observable {...}  // data source 3

// Invoking and subscribing
getData().pipe(
  catchError(error => {
    if (error.status === 500) {
      console.error('Switching to retrieving cached beer data')
      returned getCachedData();
    } else {
      console.error('Switching to another data source')
      return getDataFromAnotherService()
    } 
  }),
  map(beer => `${beer.name}, ${beer.country}`)
)
.subscribe(beer => console.log(`Subscriber got ${beer}`))
```
