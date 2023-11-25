const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./user.db', (err) => {
  console.log('connect')
});

let sql = 'select * from user where rowid = ?';


let id = 1;


db.get(sql, [id], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.name, row.line)
    : console.log('no');
})


db.close(() => {
  console.log('close');
});
