const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./user.db', (err) => {
  console.log('connect')
});

let sql = 'select * from user where rowid = ?';


let id = 1;

async function f() {
let promise = new Promise((re,rej) => 
db.get(sql, [id], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  const data = row;
  return data;
})


)
let result = await promise;
return result;

}

f().then((r) => console.log(r.name))


//db.close(() => {
 // console.log('close');
//});
