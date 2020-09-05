# Hot and Cold Observable

- **Cold**: An Observable creates a new data producer for each subdcriber.
- **Hot**: Each subscriber shares the data from the same producer starting from the moment of subscription
---
**NetFlix / Teathre analogy**
- **Cold**: Watching a movie on Netflix. Each viewer has its stream.
- **Hot**: Watching a movie in a theater. If you are late, you'll miss the beginning of the movie.
---
## Hot Observable Examples
- Mouse events
- Stock prices feed
- An accelerometer in a smartphone
