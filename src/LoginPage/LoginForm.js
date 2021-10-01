import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = (props) => {
    const registration = useHistory();
  const handleNewRegistration = () => registration.push('/Registration');
 
  const [enteredUserId, setEnteredUserId] = useState('');
  const [enteredPassword, setPassword] = useState('');
  
  
  const  userIdChangeHandler = (event) => {
    setEnteredUserId(event.target.value);
    
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
   
  };



  const submitHandler = (event) => {
    event.preventDefault();

    const credentials = {
      userId: enteredUserId,
      password: enteredPassword,
      
    };
    
    props.loginData(credentials);
    setEnteredUserId('');
    setPassword('');
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='login-form__controls'>
        <div className='login-form__control'>
          <label>UserName</label>
          <input
            type='text'
            value={enteredUserId}
            onChange={userIdChangeHandler}
          />
          <p></p>
          <label>Password</label>
          <input
            type='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
      </div>
      <div className='login-form__actions'>
         <button type='submit' >Login</button>
         <button type='button' onClick={props.onCancel}>Cancel</button>
         <button type='button' onClick={handleNewRegistration}>New User Registeration</button>
        
        
      </div>
    </form>
  );
};

export default LoginForm;