import axios from 'axios';
import React, { useState } from 'react';

const CustomerDelete = (props) => {
    const [id, setId] = useState(props.id);

     const deleteCustomer = async() =>{
        const url = 'http://localhost:5000/api/customers/' + id;
        try{
            const response = await axios.delete(url, {});
            console.log('delete data successful!', response.data);
            props.stateRefresh();
        }
        catch(error){
            console.error('failed', error);
        }
     };

    return (
        <>
            <button onClick={()=>{console.log('삭제'); deleteCustomer(id);}}>삭제</button>
        </>
    );
};

export default CustomerDelete;