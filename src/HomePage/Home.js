import React from "react";
import './Home.css'
import { useHistory } from "react-router";

const Home=(props)=>{
    const history = useHistory();
    const logoutHandler = () => history.push('/');
    
    const handleLogout=()=>{
        window.sessionStorage.removeItem("userId");
        logoutHandler();
    }
    const handleApplyForLoan=()=>history.push('/ApplyForLoan');
    const handleEditDetails=()=>history.push('/EditDetails')
    return(
    <div className="main-div"  >
          <div className="navigator">
            <button onClick={handleLogout}>Logout</button>
      </div>
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