import React from 'react';

const Customer = (props) => {
    
    return (
        <div>
            <CustomerProfile id = {props.id} 
                image={props.image} 
                name = {props.name}/>
            <CustomerInfo 
                name = {props.name}
                birthday = {props.birthday}
                gender = {props.gender}
                job = {props.job}
            />
        </div>
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
