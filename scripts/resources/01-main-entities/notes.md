## Principali Entita' RxJS
Le principali entita' coinvolte in RxJS sono 5:
- **Observable** - un produttore di una sequenza di valori
- **Observer** - un consumatore di valori emessi dall'observable 
- **Subscriber** - connette observer e observable 
- **Operator** - en-route trasformazione di valore 
- **Subject** - include sia un observable che uno o piu' observer(s)
---
## Ruolo dell'Observable, Observer e il Subscriber
- Un subscriber fornisce un oggetto Observer ad un Observable 
- Un Observable puo' invocare i seguenti tre metodi su un Observer:  
  -  `next()`
  - `error()`
  - `complete()`
  
**Un Observable consente**:
- Operare un subscribe/unsuscribe al proprio stream di dati
- Emettere il valore successivo all'observer
- Notificare eventuali errori all'observer
- Informare l'observer che lo stream di dati ha completato

**Un Observer puo' fornire**:
- Una funzione per gestire l'elemento successivo dallo stream
- Una funzione per gestire errori
- Una funzione per gestire la fine dello stream
