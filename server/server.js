const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const bcrypt = require("bcrypt")
const port = 8989;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/users", (req,res)=>{
  let SQL = "select * from users"
  db.query(SQL,(err,result)=>{
    if(err) res.send(err)
    console.log(result)
    res.send(result)
  })

})

app.post("/register" , async (req, res) => {
  //destructuring req.body object
  let { name, username, email, password, contact } = req.body;

  //Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);
  password = hashedPassword;

  //checking for worst casses
  if (!req.body)
    return res.status(400).json({ success: false, error: "No body" });
  if (!name || !username || !email || !password || !contact)
    return res.status(400).json({ success: false, error: "Missing fields" });
  if (name == null || username == null || email == null || password == null)
    return res.status(400).json({ success: false, error: "Null fields" });


  //SQL Query that is needed to be executed
  const sqlInsert =
    "INSERT INTO users(username, name, email, password, contact) VALUES (?,?,?,?,?)";
  
  //Query Execution
  db.query(
    sqlInsert,
    [username, name, email, password, contact],
    (err, result) => {
      console.log(err);
    }
  );

  //Redirecting to login page after Query is Executed
  res.redirect("http://localhost:3000/login");
});

//Connecting to the server and the database
app.listen(port, () => {
  db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
  });
  console.log(`Server is running on port ${port}`);
});
