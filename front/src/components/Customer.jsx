import { TableCell, TableRow } from '@mui/material';

const Customer = (props) => {
    
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} style={{width:50, height:50}}/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
        
    );
}

export default Customer;
