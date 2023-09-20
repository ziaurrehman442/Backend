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


function randomStr(len) {
  let ans = '';
  let arr = "12345678910ABCDEFGHIJKLMNOPQRATUVWXYZabcdefghijklmnopqrstuvwxyz"
  for (let i = len; i > 0; i--) {
      ans +=
          arr[(Math.floor(Math.random() * arr.length))];
  }
  return ans;
}

var name = '';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './frontend/public/uploads'); // Define the folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    name = randomStr(10)+file.originalname;
    cb(null, name); // Use the original file name for storage
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public')); // Serve static files, including uploaded files
app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  try {
    const sql = "INSERT INTO `user_data`(`id`, `Email`, `Phone`, `address`, `Image`, `introduction`, `title`, `fname`, `lname`) VALUES (?)";
    const data = {
      id: req.body.id,
      Email: req.body.Email,
      Phone: req.body.Phone,
      address: req.body.address,
      Image: req.body.name,
      introduction: req.body.introduction,
      title: req.body.title,
      fname: req.body.fname,
      lname: req.body.lname,
    }
    db.query(sql,[data], (err, resp) => {
        if (err) return res.json(err);
        return res.json(resp);
    })
  }

});

app.listen(8081, () => {
    console.log("listening!");
})