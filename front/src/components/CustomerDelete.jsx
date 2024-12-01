import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const CustomerDelete = (props) => {
    const [id, setId] = useState(props.id);
    const [isOpen, setIsOpen] = useState(false);

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

     const handleClickOpen = () => {
        setIsOpen(true);
     };

     const handleClose = () => {
        setIsOpen(false);
     };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={()=>{handleClickOpen();}}>삭제</Button>
            <Dialog onClose={handleClose} open={isOpen}>
                <DialogTitle>

                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        선택한 고객정보가 삭제됩니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color="primary" onClick={(e)=>{deleteCustomer(id);}}>삭제</Button>
                    <Button variant='contained' color="primary" onClick={(e)=>{handleClose(id);}}>닫기</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CustomerDelete;