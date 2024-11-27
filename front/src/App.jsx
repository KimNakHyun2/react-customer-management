import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import './App.css';
import Customer from './components/Customer';
//import viteLogo from '/vite.svg'






// const theme = createTheme({
//   overrides: {
//       Paper: {
//           root: {
//               padding: '10px',
//               marginBottom: '10px',
//           },
//       },
//   },
// });

const style = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit*3,
    overflow: "auto"
  },
  table: {
    minWidth: 1080,
  }
});
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
    id: 4,
    image: 'https://raw.githubusercontent.com/KimNakHyun2/Image-Icons/main/icecream/main/ic_2.jpg',
    name: '임꺽정',
    birthday: '2212321',
    gender: '남자',
    job: '도둑'
  },
];

function App() {

  
  return (
    
    <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>성명</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
    </Paper>

  )
}

export default App
