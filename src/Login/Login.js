import React,{useState} from 'react';
import { useHistory } from 'react-router';
import LoginForm from './LoginForm';
import './Login.css';
import axios from 'axios';
import '../UI/PopUp.css'


const Login = (props) => {
  const Home=useHistory();
  const[state,setState]=useState(false);
  const[invalidCredentialsCond,setInvalidCredentialsCond]=useState(false)
  const handleClick = () => {setInvalidCredentialsCond(false)};
  const displayForm=()=>
  {
    setState(true);
  }
  const LoginDataHandler = (credentials) => {
    axios.post("http://localhost:30727/Authenticate",{userId:credentials.userId,
    password:credentials.password
                                                        }).then((response)=>{
                                                          window.sessionStorage.setItem("token", response.data.token)})
                                                          .catch(function (error)
                                                           {console.log(error.request.status)})
     setTimeout(() => {  
       if(window.sessionStorage.getItem("token")!==null)
       { 
         window.sessionStorage.setItem("userId", credentials.userId);   
         Home.push('/Home');
        }
       else{
         setInvalidCredentialsCond(true)
       } 
     }, 300);
    
    
    
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