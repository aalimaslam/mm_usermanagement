const sql = require("mysql");
const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_management",
});
module.exports = db;