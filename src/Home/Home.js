import React from "react";
import './Home.css'
import { useHistory } from "react-router";
import NavigationBar from "./NavigationBar";

const Home=(props)=>{
    const history=useHistory();
    const handleApplyForLoan=()=>history.push('/ApplyForLoan');
    const handleEditDetails=()=>history.push('/EditDetails')
    return(
    <div className="main-div" style={{ 
      backgroundImage: `url("https://cdn5.vectorstock.com/i/1000x1000/61/19/banking-theme-cartoon-bank-building-with-dollars-vector-27296119.jpg")` 
         ,overflow: "hidden"}} >
    <NavigationBar/>
    <div className="container-fluid mb-5" > 
      
         <br/>
         <h2>Welcome To Our Bank!!</h2>
        <div className="pageBody">
              <button onClick={handleEditDetails}> Edit Details</button>
              <br/>
              <button onClick={handleApplyForLoan}> Apply for Loan</button>
        </div>
   </div>
   </div>);
    

};

export default Home;