# sqlite nodejs


database connect code 'inmemory'
```
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('connected to the in-memory sqlite database.');
});

//console.log(db); -> database {}

db.close();
```
