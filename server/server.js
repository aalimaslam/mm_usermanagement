const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const port = 8989;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/register", (req, res) => {
  req.body = JSON.parse(Object.keys(req.body)[0]);
  const { name, username, email, password, contact } = req.body;
  if (!req.body)
    return res.status(400).json({ success: false, error: "No body" });
  if (!name || !username || !email || !password || !contact)
    return res.status(400).json({ success: false, error: "Missing fields" });
  if (name == null || username == null || email == null || password == null)
    return res.status(400).json({ success: false, error: "Null fields" });

  if (
    name == "" ||
    username == "" ||
    email == "" ||
    password == "" ||
    contact == ""
  )
    return;

  const sqlInsert =
    "INSERT INTO users(username, password, email, contact, name) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [username, password, email, contact, name],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
  res.send("Query executed");
});

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(port, () => {
  db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
  });
  console.log(`Server is running on port ${port}`);
});
