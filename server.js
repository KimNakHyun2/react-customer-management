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

app.get('/api/customers', (req, res)=>{
    res.send(
        [
            {
              id: 1,
              image: 'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_0.jpg',
              name: '홍길동',
              birthday: '9612324',
              gender: '남자',
              job: '대학생'
            },
            {
              id: 2,
              image: 'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_1.jpg',
              name: '홍길동2',
              birthday: '9612321',
              gender: '여자',
              job: '무직'
            },
            {
              id: 3,
              image: 'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_2.jpg',
              name: '김좌진',
              birthday: '1212321',
              gender: '남자',
              job: '무직'
            },
            {
              id: 4,
              image: 'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_2.jpg',
              name: '임꺽정',
              birthday: '2212321',
              gender: '남자',
              job: '도둑'
            },
          ]
    );
});

// app.use(cors({
//     origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
// }));



app.listen(port, ()=>console.log(`Listen on ${port}`));