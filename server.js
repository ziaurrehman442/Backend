const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cv"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM `users`";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/templates", (req, res) => {
  const sql = "SELECT * FROM `templates`";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  })
})


app.post('/create/:name', (req,res) => {
    const sql ="INSERT INTO `users`(`name`, `Email`, `address`, `phone`, `PASSWORD`) VALUES (?) ";
    const array = JSON.parse(req.params.name);
    const address = array.address;
    const address1 = address.replaceAll('@', '/');
    const value =  [
        array.U_NAME,
        array.Email,
        address1,
        array.Phone,
        array.PASSWORD
    ];
    db.query(sql, [value] ,(err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'frontend/src/uploads'); // Directory where images will be saved
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded successfully');
  });


  

app.listen(8081, () => {
    console.log("listening!");
})