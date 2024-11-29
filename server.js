const fs=require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const corsConfig = {
    origin: 'http://localhost:5000',
    credentials: true,
  };
  
  //app.use(cors(corsConfig));
 app.use(cors());

 const data = fs.readFileSync('./db.json');
 const db_conf = JSON.parse(data);
 const mysql = require('mysql2');
 const conn = mysql.createConnection(db_conf);

 //file upload
 const multer = require('multer');
 const upload = multer({dest:'./upload'});

app.get('/api/customers', (req, res)=>{
  conn.connect();
  conn.query("select * from customer", 
    (err, rows, fields) => {
      if(err)
        console.error('err db connect!!!' + err.stack);

      res.send(rows);
  });
});

app.use('/image', express.static('./upload'))

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO customer VALUES(null, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  console.info(params);
  conn.query(sql, params, (err, rows, fields) => {
    console.error(err);
    res.send(rows);
  });
}
);
app.listen(port, ()=>console.log(`Listen on ${port}`));