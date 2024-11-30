import { TableCell, TableRow } from '@mui/material';
import CustomerDelete from './CustomerDelete';

const Customer = (props) => {
    
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={`http://localhost:5000${props.image}`} style={{width:50, height:50}}/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell><CustomerDelete id={props.id} stateRefresh={props.stateRefresh}/></TableCell>
        </TableRow>
        
    );
}

export default Customer;
