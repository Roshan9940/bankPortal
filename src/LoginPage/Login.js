import React,{useState} from 'react';
import { useHistory } from 'react-router';
import LoginForm from './LoginForm';
import './Login.css';


const Login = (props) => {
  const Home=useHistory();
  const handleLogin=()=>Home.push('/Home');
  const[state,setState]=useState(false);
  const[invalidCredentialsCond,setInvalidCredentialsCond]=useState(false)
  
  const handleClick = () => {setInvalidCredentialsCond(false)};
  const displayForm=()=>
  {
    setState(true);
  }
  const LoginDataHandler = (credentials) => {
    if(credentials.password.trim()!==""&&(credentials.userId.trim()).length===6){ 
      window.sessionStorage.setItem("userId", credentials.userId);
      window.sessionStorage.setItem("x",1);

     handleLogin();}
     else{
      setInvalidCredentialsCond(true)
     }
  };
  const stopEditing=()=>
  {
    setState(false);
  }
  return (
    <div className='login' >
      {!state&&<button onClick={displayForm}>Login</button>}
      {state&&<LoginForm loginData={LoginDataHandler} onCancel={stopEditing}/>}
      <br/>
      {invalidCredentialsCond &&
      <div className="backdrop" >
       <div className="modalz">
        <header className="headerz">
           <h2>Invalid Credentials</h2>
        </header>
        <div className="contentz">
            <p>Please Try Again</p>
           
        </div>
        <footer className="actions">
           <button className="btn btn-sucess" onClick={handleClick}>Retry</button>
        </footer>
    </div></div>}
      

     </div>
  );
};

export default Login;