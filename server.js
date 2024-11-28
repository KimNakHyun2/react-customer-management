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

app.get('/api/customers', (req, res)=>{
  conn.connect();
  conn.query("select * from customer", 
    (err, rows, fields) => {
      if(err)
        console.error('err db connect!!!' + err.stack);

      res.send(rows);
  });
});

// app.use(cors({
//     origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
// }));



app.listen(port, ()=>console.log(`Listen on ${port}`));