const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    return console.error(err.messae);
  }
  console.log('Connected')
});

db.get('SELECT id, name FROM sample WHERE id = ?', [1], (err, row) => {
  console.log(row.name)
})

db.close();
