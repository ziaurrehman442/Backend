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
    return (res.status(400).send('No file uploaded.'));
  }
  else{
    return(res.status(200).send('file uploaded successfully.'));
  }
});


function randnum() {
  let ans = '';
  let arr = "0987654321"
  for (let i = 10; i > 0; i--) {
      ans +=
          arr[(Math.floor(Math.random() * arr.length))];
  }
  return ans;
}


app.post('/createcvd/:data',(req,res) => {
  const sql ="INSERT INTO `user_data`(`id`, `Email`, `Phone`, `address`, `Image`, `introduction`, `title`, `fname`, `lname`) VALUES (?)";
    const array = JSON.parse(req.params.data);
    const address = array.data.address;
    const value =  [
        array.data.id,
        array.data.Email,
        array.data.Phone,
        address,
        name,
        array.data.introduction,
        array.data.title,
        array.data.fname,
        array.data.lname
    ];

    db.query(sql, [value] ,(err) => {
        if (err){ return res.json(err);}
        else{
          const sql = "SELECT `U_id` FROM `user_data` WHERE image = ?";
          db.query(sql, [name] ,(err,data) => {
            if (err){ return res.json(err);}
            return res.json(data);
          })
        }
    })
})

app.listen(8081, () => {
    console.log("listening!");
})