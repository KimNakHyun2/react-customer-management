import './App.css';
import Customer from './components/Customer';
//import viteLogo from '/vite.svg'

const customers = [
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
    id: 3,
    image: 'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_2.jpg',
    name: '임꺽정',
    birthday: '2212321',
    gender: '남자',
    job: '도둑'
  },
];

function App() {
  return (
    <>
      {
        customers.map((custom)=>{

          return (
            <Customer key ={custom.id} 
              id = {custom.id} 
              image={custom.image} 
              name={custom.name} 
              birthday={custom.birthday}
              gender={custom.gender} 
              job={custom.job}
            />
          );        
        })
      }
    </>
    
  )
}

export default App
