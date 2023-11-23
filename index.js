const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('connected to the sample.db sqlite database.');
});

//console.log(db); -> database {}

db.all('select * from sample', [], (err, rows) => {
  if (err) {
    throw err;
  }
    
    console.log(rows);
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('close db connection');
})
