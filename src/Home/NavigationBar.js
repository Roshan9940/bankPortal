import React from "react"
import { useHistory } from "react-router";

const NavigationBar=()=>{
    const history = useHistory();
    const logoutHandler = () => history.push('/');
    
    const handleLogout=()=>{
      window.sessionStorage.clear();
        logoutHandler();
    }
    let ApplyForLoanClass="nav-link"
    let HomeClass="nav-link"
    let EditDetailsClass="nav-link"
    const currentPage=history.location.pathname;
    if (currentPage==='/ApplyForLoan')
      ApplyForLoanClass="nav-link active"
    if(currentPage==='/Home')
      HomeClass="nav-link active"
    if(currentPage==='/EditDetails')
      EditDetailsClass="nav-link active"

    return( 
      <nav class="navbar navbar-expand-sm bg-secondary navbar-dark ">
  <div class="container">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" style={{fontWeight: "bolder"}}>
        <a class={HomeClass} href="/Home">Home</a>
      </li>
      <li class="nav-item" style={{fontWeight: "bolder"}}>
        <a class={ApplyForLoanClass}  href="/ApplyForLoan">Apply For Loan</a>
      </li>
      <li class="nav-item" style={{fontWeight: "bolder"}}>
        <a class={EditDetailsClass} href="/EditDetails">Edit Details</a>
      </li>
      <li>
      <button class="btn btn-danger"onClick={handleLogout}>Logout</button>
      </li>
    </ul>
    
  </div>
</nav>
    )
}

export default NavigationBar;