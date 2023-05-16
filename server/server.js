const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const port = 8989;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hi");
});


app.post("/register", (req, res) => {
  const { name, username, email, password, contact } = req.body;
  console.log(req.body) 
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
    // username	name	email	password	contact
  console.log(req.body);
  const sqlInsert =
    "INSERT INTO users(username, name, email, password, contact) VALUES (?,?,?,?,?)";
  db.query(
    sqlInsert,
    [username, name, email, password, contact],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
  res.redirect("http://localhost:3000/login");
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
