
import axios from 'axios';
import { useRef } from 'react';

const CustomerAdd = () => {
    const selectedFiles = useRef(null);
    const userName = useRef('');
    const birthday = useRef('');
    const gender = useRef('');
    const job = useRef('');
    const fileName = useRef('');

    const addCustomer = () =>{
        const url = 'http://localhost:5000/api/customers';
        // const formData = new FormData();
        // formData.append('image', selectedFiles.current.files[0]);
        // formData.append('name', userName.current.value);
        // formData.append('birthday', birthday.current.value);
        // formData.append('gender', gender.current.value);
        // formData.append('job', job.current.value);

        const sendData = {
            image: selectedFiles.current.files[0],
            name:  userName.current.value,
            birthday: birthday.current.value,
            gender: gender.current.value,
            job: job.current.value
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
            userName.current.value = '';
            birthday.current.value = '';
            gender.current.value = '';
            job.current.value = '';
        });
    }

    const  handleFormSubmit = (e) => {
        e.preventDefault();
        addCustomer();
    }

    // const  handleFileChange = (e) =>{
    //     setState({
    //         file:e.target.files[0],
    //         fileName: e.target.value
    //     });
    // }

    // const handleValueChange = (e) =>{
    //     let nextState = {};
    //     nextState[e.target.name] = e.target.value;
    //     setState(nextState);
    // }


    return (
        <form onSubmit={handleFormSubmit} encType='multipart/form-data' >
                <h1>고객추가</h1>
                프로필 이미지: <input type="file" name="file" ref={selectedFiles}/><br/>
                이름: <input type="text" name="userName" ref={userName}/><br/>
                생년월일: <input type="text" name="birthday" ref={birthday}/><br/>
                성별: <input type="text" name="gender" ref={gender}/><br/>
                직업: <input type="text" name="job" ref={job}/><br/>
                <button type="submit" >추가하기</button>
            </form>
    );
}

export default CustomerAdd;

