import React from "react";
import './Registration.css';
import RegistrationForm from "./RegistrationForm";
import { useHistory } from 'react-router-dom';

const Registration = (props) => {
    const history = useHistory();
    const handleClick = () => history.push('/');
    return(
        <div className="new-register" >
            <h2>Registration Form</h2>
            <p style={{textAlign:"center"}}>If you Already have an Account <button onClick={handleClick}>Login</button></p>
            <RegistrationForm></RegistrationForm> 
        </div>
    )}
export default Registration