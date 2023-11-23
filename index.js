const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('connected to the in-memory sqlite database.');
});

//console.log(db); -> database {}

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('close db connection');
})
