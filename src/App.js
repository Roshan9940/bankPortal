import './App.css';
import Home from './HomePage/Home'
import Login from './LoginPage/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './RegistrationPage/Registration'
import ApplyForLoan from './HomePage/ApplyForLoan';
import EditDetails from './HomePage/EditDetails';



function App() {
  return (
    
    <Router>
    <Switch>
    <div >
      <div style={{ 
      backgroundImage: `url("https://image.shutterstock.com/image-vector/bank-building-columns-urban-landscapes-260nw-1415245526.jpg")` 
        }}><Route exact path="/" component={Login} /></div>
      <div style={{backgroundColor:"#87CEFA"}}><Route path="/Registration" component={Registration} /></div>
      <div ><Route path="/Home" component={Home} /></div>
      <div ><Route path="/ApplyForLoan" component={ApplyForLoan} /></div>
      <div style={{backgroundColor:"#87CEFA"}}><Route path="/EditDetails" component={EditDetails} /></div>
    </div>  
    </Switch>
    </Router>
    
  );
}

export default App;
