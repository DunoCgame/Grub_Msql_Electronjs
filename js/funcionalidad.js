var Mysql = window.Mysql();

var conn = Mysql.createConnection({
  host: "localhost",
  user: "root"
  // password: "yourpassword"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});