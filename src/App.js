import React, { Suspense, lazy } from 'react';
import './App.css';
import Home from './Home/Home'
import Login from './Login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './Error/Error';
import Background from './Assets/bank-building.jpg'
const Registration = lazy(() => import('./Registration/Registration'));
const ApplyForLoan = lazy(() => import('./Home/ApplyForLoan'));
const EditDetails = lazy(() => import('./Home/EditDetails'));

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
      <Suspense fallback={<div>Loading...</div>}>
    <Switch>
    <div >
      <div style={{ 
     backgroundImage: `url(${Background})`
        }}><Route exact path="/" component={Login} /></div>
      <div><Route path="/Registration" component={Registration} /></div>
      <div ><PrivateRoute path="/Home" component={Home} /></div>
      <div ><PrivateRoute path="/ApplyForLoan" component={ApplyForLoan} /></div>
      <div><PrivateRoute path="/EditDetails" component={EditDetails} /></div>
      <div><Route exact path="/Error" component={Error} /></div>
    </div>  
    </Switch>
    </Suspense>
    </Router>
    
  );
 
  
}

export default App;
