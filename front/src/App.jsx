import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
//import viteLogo from '/vite.svg'

function App() {

  const [customers, setCustomers] = useState([]);

  const callApi = async () => {
    const response = await fetch('http://localhost:5000/api/customers');
    const body = await response.json();

    setCustomers(body);
    console.log(body);
    return body;

  };

  const stateRefresh = () =>{
    setCustomers([]);
    callApi();
  }
  useEffect(()=>{
    callApi();
  }, []);
  
  return (
    <div>
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
                        stateRefresh = {stateRefresh}
                      />
                    );        
                  })
                }
          </TableBody>
        </Table>
    </Paper>
    <CustomerAdd stateRefresh={stateRefresh}/>
    </div>
  )
}

export default App
