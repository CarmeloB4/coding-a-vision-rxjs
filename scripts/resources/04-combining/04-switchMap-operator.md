# Killing HTTP requests with `switchMap`

**HTML snippet**
```html
<input type="text" placeholder="Enter city" [formControl]="searchInput" />
```

**Angular snippet**
```angular2
this.searchInput.valueChanges.pipe(
  debounceTime(200),
  switchMap(city => this.getWeather(city))
).subscribe(
  res => {
    this.temperature = `
      Current temperature is ${res.main.temp}C, humidity: ${res.main.humidity}
    `
  },
  error => console.error(`Can't get weather. Error code: ${error.message}, URL: ${error.url}')
)

getWeather(city: string): Observable<Array> {
  return this.http.get<Array>(`this.baseWeatherURL${city}${this.urlSuffix}`)
}
```
