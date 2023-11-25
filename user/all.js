const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./user.db', (err) =>{ 
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected');
});

let sql = 'select * from user ';

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  const data = rows;
  console.log(data);
  rows.forEach((row) => {
    console.log(row.name);
  });
  rows.forEach(row => {
    console.log(row.line);
  });
})

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close');
});
