import React from 'react';
import './App.css';
import Home from './Home/Home'
import Login from './Login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './Registration/Registration'
import ApplyForLoan from './Home/ApplyForLoan';
import EditDetails from './Home/EditDetails';
import Error from './Error/Error';
import Background from './Assets/bank-building.jpg'

function App() {
  const Auth=()=>{
  let isAuthenticated=true;
  let token=window.sessionStorage.getItem("token");
  console.log(token);
  if((token)){
      isAuthenticated=true
  } 
  else{
      isAuthenticated=false
  }
  return isAuthenticated;
}
  const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route 
      {...rest}
      render={props =>
        Auth()
          ? (<Component/>) 
          : (props.history.push("/"))
      }
    />)
  return (
    
    <Router>
    <Switch>
    <div >
      <div style={{ 
     backgroundImage: `url(${Background})`
        }}><Route exact path="/" component={Login} /></div>
      <div style={{backgroundColor:"#87CEFA"}}><Route path="/Registration" component={Registration} /></div>
      <div ><PrivateRoute path="/Home" component={Home} /></div>
      <div ><PrivateRoute path="/ApplyForLoan" component={ApplyForLoan} /></div>
      <div><PrivateRoute path="/EditDetails" component={EditDetails} /></div>
      <div><Route exact path="/Error" component={Error} /></div>
    </div>  
    </Switch>
    </Router>
    
  );
 
  
}

export default App;
