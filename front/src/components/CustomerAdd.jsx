
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import { useRef, useState } from 'react';


const CustomerAdd = (props) => {
    const selectedFiles = useRef(null);
    // const userName = useState('');
    // const birthday = useState('');
    // const gender = useState('');
    // const job = useState('');
    //const fileName = useRef('');

    const [state, setState] = useState({
        name: '',
        birthday: '',
        gender: '',
        job: ''
    });

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () =>{
        setDialogOpen(true);
    }

    const handleDialogClose = () =>{
        setDialogOpen(false);
    }

    const addCustomer = () =>{
        const url = 'http://localhost:5000/api/customers';
        // const formData = new FormData();
        // formData.append('image', selectedFiles.current.files[0]);
        // formData.append('name', userName.current.value);
        // formData.append('birthday', birthday.current.value);
        // formData.append('gender', gender.current.value);
        // formData.append('job', job.current.value);

        const sendData = {
            image: selectedFiles.current.files?.[0],
            name:  state.name,
            birthday: state.birthday,
            gender: state.gender,
            job: state.gender
        };

        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        };
        console.log(sendData);

        return axios.post(url, sendData, config)
        .then((response)=>{
            console.log(response);
            selectedFiles.current.files = null,
            setState({
                name: '',
                birthday: '',
                gender: '',
                job: ''
            });
            // userName.current.value = '';
            // birthday.current.value = '';
            // gender.current.value = '';
            // job.current.value = '';
            handleDialogClose();
            
            props.stateRefresh();
        });
    }

    const  handleFormSubmit = (e) => {
        //e.preventDefault();
        addCustomer();
    }

    const onDialogClose = () =>{
        //props.stateRefresh();
    }


    // const handleDialogClose = () =>{
    //     setDialogOpen (false);
    // }
    // const  handleFileChange = (e) =>{
    //     setState({
    //         file:e.target.files[0],
    //         fileName: e.target.value
    //     });
    // }

    const handleValueChange = (e) =>{
        const {name, value} = e.target;
        const nextState = {
            ...state,
            [name]: value
        };
        setState(nextState);
    }


    return (
        <div>
            <Button variant="contained" 
            color="primary" 
            onClick={()=>{handleDialogOpen()}}>고객추가하기</Button>

            
            <Dialog open={dialogOpen} onClose={()=>{() => onDialogClose()}}>
                <DialogTitle>고객 추가</DialogTitle>
                <DialogContent>
                <Button
                    variant="contained"
                    component="label"
                    >
                    Upload File
                    <input
                        type="file"
                        hidden
                        ref={selectedFiles}
                    />
                    </Button>
                    <br/>
                    <TextField label="이름" type="text" name="name" onChange={handleValueChange}/><br/>
                    <TextField label="생년월일" type="text" name="birthday" onChange={handleValueChange}/><br/>
                    <TextField label="성별" type="text" name="gender" onChange={handleValueChange}/><br/>
                    <TextField label="직업" type="text" name="job" onChange={handleValueChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={()=>{handleFormSubmit()}}>추가</Button>
                    <Button variant="outlined" color="primary" onClick={()=>{handleDialogClose()}}>닫기</Button>
                </DialogActions>
            </Dialog>
            
        </div>

        
    );
}

export default CustomerAdd;

