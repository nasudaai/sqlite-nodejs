const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('connected to the sample.db sqlite database.');
});

//console.log(db); -> database {}

let sql = `SELECT DISTINCT Name name FROM sample ORDER BY name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  })  
  const data = rows;
  return data;
});



db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('close db connection');
})

