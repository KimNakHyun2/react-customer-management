import { TableCell, TableRow } from '@mui/material';
import React from 'react';

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

const CustomerInfo = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    );
}

const CustomerProfile = (props) => {
    return (
        <div>
            <img src={props.image} alt="profile"/>
            <h2>{props.name}(ID:{props.id})</h2>
        </div>
    );
};



export default Customer;
