import React,{useState} from "react";
import './ApplyForLoan.css'
import axios from "axios";
import SubmitApplicationPopUp from "../UI/SubmitApplicationPopUp";
import NavigationBar from "./NavigationBar";
import { useHistory } from "react-router";

const ApplyForLoan=()=>{
    const History=useHistory();
    const [loanType,setLoanType]=useState("");
    const [popUpCondition,setPopUpCondition]=useState(false)
    const[educationLoanFormDetails,setEducationLoanFormDetails]=useState({courseName:null,
                                                                          courseFee:null,
                                                                          fatherName:null,
                                                                          fatherOccupation:null,
                                                                          fathersTotalExp:null,
                                                                          fathersCurCompanyExp:null,
                                                                          rationCardNo:null,
                                                                          annualIncome:null,
                                                                          loanPeriod:"5",
                                                                          interestRate:"6.58%",
                                                                          loanAmount:null
                                                                        });
      const[personalLoanFormDetails,setPersonalLoanFormDetails]=useState({ annualIncome:null,
                                                                            companyName:null,
                                                                            designation:null,
                                                                            totalExp:null,
                                                                            expCurrentCompany:null,
                                                                            loanPeriod:5,
                                                                            interestRate:"10.5%",
                                                                            loanAmount:null
                                                                          });
   
    const userId=window.sessionStorage.getItem("userId")
    const educationLoanFormDetailsChangeHandler=(event)=>
    {const {id , value} = event.target   
    setEducationLoanFormDetails(prevState => ({
        ...prevState,
        [id] : value
    })) 
    }
    const personalLoanFormDetailsChangeHandler=(event)=>
    {const {id , value} = event.target   
    setPersonalLoanFormDetails(prevState => ({
        ...prevState,
        [id] : value
    })) 
    }
    const educationLoanFormSubmitHandler=(event)=>{
      event.preventDefault();
      
      if(!validateAnnualIncome()&&!validateCourseName()&&!validateCourseFee()
      &&!validateFatherName()&&!validateFathersCurrCompanyExp()&&!validateFathersOccupation()
      &&!validateFathersTotalExp()&&!validateRationCardNo()){
      axios.post("http://localhost:28916/api/EducationLoanApplications",{courseName:educationLoanFormDetails.courseName,
      userId:userId,
      courseFee:educationLoanFormDetails.courseFee,
      fatherName:educationLoanFormDetails.fatherName,
      fatherOccupation:educationLoanFormDetails.fatherOccupation,
      fathersTotalExp:educationLoanFormDetails.fathersTotalExp,
      fathersCurCompanyExp:educationLoanFormDetails.fathersCurCompanyExp,
      rationCardNo:educationLoanFormDetails.rationCardNo,
      annualIncome:educationLoanFormDetails.annualIncome,
      loanPeriod:educationLoanFormDetails.loanPeriod,
      interestRate:"6.58%",
      loanAmount:educationLoanFormDetails.loanAmount}).then((response)=>{
        setPopUpCondition(true)})
        .catch(error=>
          {History.push('/Error');console.log(error.request.status)})
      
      
    }
    }
    const personalLoanFormSubmitHandler=(event)=>{
      event.preventDefault();
      axios.post("http://localhost:28916/api/PersonalLoanApplications",{annualIncome:personalLoanFormDetails.annualIncome,
      userId:userId,
      companyName:personalLoanFormDetails.companyName,
      designation:personalLoanFormDetails.designation,
      totalExp:personalLoanFormDetails.totalExp,
      expCurrentCompany:personalLoanFormDetails.expCurrentCompany,
      loanPeriod:personalLoanFormDetails.loanPeriod,
      interestRate:"10.5%",
      loanAmount:personalLoanFormDetails.loanAmount}).then((response)=>{
        setPopUpCondition(true)})
        .catch(error=>
          {History.push('/Error');console.log(error.request.status)})
    }
    

    
   
    const validateCourseName=()=>{
        if(educationLoanFormDetails.courseName.search(/[^A-Za-z\s]/) !== -1 )
            return true;
      return false;
    }
    const validateFatherName=()=>{
      if(educationLoanFormDetails.fatherName.search(/[^A-Za-z\s]/) !== -1 )
          return true;
    return false;
  }
  const validateFathersOccupation=()=>{
    if(educationLoanFormDetails.fatherOccupation.search(/[^A-Za-z\s]/) !== -1 )
        return true;
  return false;
}
const validateCourseFee=()=>{
    if(educationLoanFormDetails.courseFee<=0 )
        return true;
    return false;
}
const validateFathersTotalExp=()=>{
    if(educationLoanFormDetails.fathersTotalExp<=0 )
        return true;
    return false;
  }
  const validateFathersCurrCompanyExp=()=>{
    if(educationLoanFormDetails.fathersCurCompanyExp<0 )
        return true;
    return false;
  }
  const validateRationCardNo=()=>{
    if(educationLoanFormDetails.rationCardNo.length!==12)
        return true;
    return false;
  }
  const validateAnnualIncome=()=>{
    if(educationLoanFormDetails.annualIncome<=0 )
        return true;
    return false;
}
const validatePersonalAnnualIncome=()=>{
  if(personalLoanFormDetails.annualIncome<=0 )
      return true;
  return false;
}
const validateEducationalPersonalLoanAmount=()=>{
  if(educationLoanFormDetails.loanAmount<=0 )
      return true;
  return false;
}
const validatePersonalLoanAmount=()=>{
  if(personalLoanFormDetails.loanAmount<=0 )
      return true;
  return false;
}
const validateCompanyName=()=>{
  if(personalLoanFormDetails.companyName.search(/[^A-Za-z\s]/) !== -1 )
      return true;
return false;
}
const validateDesignation=()=>{
  if(personalLoanFormDetails.designation.search(/[^A-Za-z\s]/) !== -1 )
      return true;
return false;
}
const validateTotalExperience=()=>{
  if(personalLoanFormDetails.totalExp<0 )
      return true;
  return false;

}
const validateCurrCompanyExp=()=>{
  if(personalLoanFormDetails.expCurrentCompany<0||personalLoanFormDetails.expCurrentCompany>personalLoanFormDetails.totalExp)
      return true;
  return false;
}
const loanTypeHandler=(Event)=>{
        setLoanType(Event.target.value)
 }
    return(

    <div className="main-div"  >
        <NavigationBar/>
        <div className="container-fluid__ApplyForLoan mb-5" >
       
        {popUpCondition&&<SubmitApplicationPopUp title="Submitted Successfull" message="Your Application Will Be Processed In Next 6-7 Business Days" ></SubmitApplicationPopUp>}

        <div className="loanapp__control">
            <br/>        
            <h4>Please Select The Type Of Loan You Wish To Apply For From The Drop Down</h4>
            <label htmlFor="loanType"></label>
            <select name="loanType" id="loanType" value={loanType} onChange={loanTypeHandler}>
              <option>--Please Select--</option>
              <option value="education">Education Loan</option>
              <option value="personal/home">Personal/Home Loan</option>
            </select>
            {loanType===""?<div><br/><br/><br/><br/></div>:
            
            <div >
                <h4>Please Fill The Bellow Form To Apply For Loan</h4>
             {loanType==="education"&&
             <form onSubmit={educationLoanFormSubmitHandler}>  
             <div className="row">
              <div className="col-lg-6">
                <label>Course Name</label>
                <input type='text' id="courseName" placeholder='Course Name' value={educationLoanFormDetails.courseName} onChange={educationLoanFormDetailsChangeHandler} required/>
                <br/>
                {educationLoanFormDetails.courseName!==null&&(educationLoanFormDetails.courseName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Course Name Empty</small>)}
                {educationLoanFormDetails.courseName!==null&&(validateCourseName()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Course Name cannot have digits or special characters</small>)}
              </div>
             <div className="col-lg-6">
                <label>Course Fee</label>
                <input type='number' id="courseFee" placeholder='Course Fee' value={educationLoanFormDetails.courseFee} onChange={educationLoanFormDetailsChangeHandler} required/>
                <br/>
                {educationLoanFormDetails.courseFee!==null&&(educationLoanFormDetails.courseFee.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Course Fee Empty</small>)}
                {(educationLoanFormDetails.courseFee!==null&&educationLoanFormDetails.courseFee.trim()!=="")&&(validateCourseFee()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Course Fee cannot be negative or zero</small>)}
              </div>    
             </div>
             <div className="row">
              <div className="col-lg-6">
             <label>Father Name</label>
             <input type='text' id="fatherName" placeholder='Father Name' value={educationLoanFormDetails.fatherName} onChange={educationLoanFormDetailsChangeHandler} required/>
             <br/>
             {educationLoanFormDetails.fatherName!==null&&(educationLoanFormDetails.fatherName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Father Name Empty</small>)}
             {educationLoanFormDetails.fatherName!==null&&(validateFatherName()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Father Name cannot have digits or special characters</small>)}
             </div>
             
             <div className="col-lg-6">
             <label>Father Occupation</label>
             <input type='text' id="fatherOccupation" placeholder='Occupation' value={educationLoanFormDetails.fatherOccupation} onChange={educationLoanFormDetailsChangeHandler} required/>
             <br/>
             {educationLoanFormDetails.fatherOccupation!==null&&(educationLoanFormDetails.fatherOccupation.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Father's Occupation Empty</small>)}
             {educationLoanFormDetails.fatherOccupation!==null&&(validateFathersOccupation()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Father's Occupation cannot have digits or special characters</small>)}
             </div>
             </div>

             <div className="row">
              <div className="col-lg-6">
             <label>Father's Total Experience In Years</label>
             <input type='number' id="fathersTotalExp" placeholder='Total Experience' value={educationLoanFormDetails.fathersTotalExp} onChange={educationLoanFormDetailsChangeHandler} required/>
             <br/>
             {educationLoanFormDetails.fathersTotalExp!==null&&(educationLoanFormDetails.fathersTotalExp.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Fathers's Total Experience Empty</small>)}
             {(educationLoanFormDetails.fathersTotalExp!==null&&educationLoanFormDetails.fathersTotalExp.trim()!=="")&&(validateFathersTotalExp()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Father's Total Experience cannot be negative or zero</small>)}
             </div>
             
             <div className="col-lg-6">
             <label>Father's Experience In Current In Years</label>
             <input type='number' max={educationLoanFormDetails.fathersTotalExp} id="fathersCurCompanyExp" placeholder='Experience In Current Company' value={educationLoanFormDetails.fathersCurCompanyExp} onChange={educationLoanFormDetailsChangeHandler} required/>
             <br/>
             {educationLoanFormDetails.fathersCurCompanyExp!==null&&(educationLoanFormDetails.fathersCurCompanyExp.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Father's Current Company Experience Empty</small>)}
             {educationLoanFormDetails.fathersCurCompanyExp!==null&&(validateFathersCurrCompanyExp()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Father's Current Company Experience cannot be negative or greater than Total Experience</small>)}
             </div>
             </div>
             <div className="row">
              <div className="col-lg-6">
             <label>Ration Card Number</label>
             <input type='number' id="rationCardNo" placeholder='Ration Card No' value={educationLoanFormDetails.rationCardNo} onChange={educationLoanFormDetailsChangeHandler} required/>
             <br/>
             {educationLoanFormDetails.rationCardNo!==null&&(educationLoanFormDetails.rationCardNo.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Ration Id Empty</small>)}
             {(educationLoanFormDetails.rationCardNo!==null&&educationLoanFormDetails.rationCardNo.trim()!=="")&&(validateRationCardNo()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Invalid Ration Id Number</small>)}
             </div>
             <div className="col-lg-6">
             <label>Annual Income</label>
             <input type='number' id="annualIncome" placeholder='Annual Income' value={educationLoanFormDetails.annualIncome} onChange={educationLoanFormDetailsChangeHandler} required/>
             <br/>
             {educationLoanFormDetails.annualIncome!==null&&(educationLoanFormDetails.annualIncome.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Annual Income Empty</small>)}
             {(educationLoanFormDetails.annualIncome!==null&&educationLoanFormDetails.annualIncome.trim()!=="")&&(validateAnnualIncome()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Annual Income cannot be negative or zero</small>)}
             </div>
             </div>
              <div className="row">
              <div className="col-lg-6">
             <label>Intrest Rate</label>
             <input type='text' value="6.58%" disabled/>
             </div>
             
             <div className="col-lg-6">
             <label>Loan Period</label>
             <select name="loanPeriod" id="loanPeriod" value={educationLoanFormDetails.loanPeriod} onChange={educationLoanFormDetailsChangeHandler}>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
            </select>            
            </div>
             </div>
             <label>Loan Amount</label>
             <input type='number' id="loanAmount" placeholder='Loan Amount' value={educationLoanFormDetails.loanAmount} onChange={educationLoanFormDetailsChangeHandler} required/>
              <br/>
              {educationLoanFormDetails.loanAmount!==null&&(educationLoanFormDetails.loanAmount.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave loan Amount Empty</small>)}
              {(educationLoanFormDetails.loanAmount!==null&&educationLoanFormDetails.loanAmount.trim()!=="")&&(validateEducationalPersonalLoanAmount()&&<small style={{color:"red"}}>&nbsp;&nbsp;*loan Amount cannot be negative or zero</small>)}

             <br/>
             <button type="submit">Sumbit</button>
             <p style={{"color":"rgb(170, 235, 247)"}}>-</p>
             </form>}
           {loanType==="personal/home"&&
             <form>
               <div className="row">
                <div className="col-lg-6">
                <label>Company Name</label>
                <input type='text' id="companyName" placeholder='Company Name' value={personalLoanFormDetails.companyName} onChange={personalLoanFormDetailsChangeHandler} required/>
                <br/>
                {personalLoanFormDetails.companyName!==null&&(personalLoanFormDetails.companyName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Company Name Empty</small>)}
                {personalLoanFormDetails.companyName!==null&&(validateCompanyName()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Company Name cannot have digits or special characters</small>)}
               </div>

               <div className="col-lg-6">
                <label>Designation</label>
                <input type='text' id="designation" placeholder='Designation' value={personalLoanFormDetails.designation} onChange={personalLoanFormDetailsChangeHandler} required/>
                <br/>
                {personalLoanFormDetails.designation!==null&&(personalLoanFormDetails.designation.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Designation Empty</small>)}
                {personalLoanFormDetails.designation!==null&&(validateDesignation()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Designation cannot have digits or special characters</small>)}
            </div>
             </div>
             
             <div className="row">
               <div className="col-lg-6">            
                <label>Total Experience In Years</label>
                <input type='number' id="totalExp" placeholder='Total Experience' value={educationLoanFormDetails.totalExp} onChange={personalLoanFormDetailsChangeHandler} required/>
                <br/>
                {personalLoanFormDetails.totalExp!==null&&(personalLoanFormDetails.totalExp.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Total Experience Empty</small>)}
                {(personalLoanFormDetails.totalExp!==null&&personalLoanFormDetails.totalExp.trim()!=="")&&(validateTotalExperience()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Total Experience cannot be negative </small>)}
               </div>

               <div className="col-lg-6">
                <label>Experience In Current Company</label>
                <input type='number' id="expCurrentCompany" max={personalLoanFormDetails.totalExp} placeholder='Experience in Current Company' value={educationLoanFormDetails.expCurrentCompany} onChange={personalLoanFormDetailsChangeHandler} required/>
                <br/>
                {personalLoanFormDetails.expCurrentCompany!==null&&(personalLoanFormDetails.expCurrentCompany.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Current Company Experience Empty</small>)}
                {(personalLoanFormDetails.expCurrentCompany!==null&&personalLoanFormDetails.expCurrentCompany.trim()!=="")&&(validateCurrCompanyExp()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Current Company Experience cannot be negative or greater than Total Experience</small>)}
               </div>
             </div>
             <div className="row">
              <div className="col-lg-6">
             <label>Intrest Rate</label>
             <input type='text' value="10.5%" disabled/>
             </div>
             
             <div className="col-lg-6">
             <label>Loan Period</label>
             <select name="loanPeriod" id="loanPeriod" value={personalLoanFormDetails.loanPeriod} onChange={personalLoanFormDetailsChangeHandler}>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
            </select>            
            </div>
             </div>
             <div className="row">
             <div className="col-lg-6">
              <label>Loan Amount</label>
              <input type='number' id="loanAmount" placeholder='Loan Amount' value={personalLoanFormDetails.loanAmount} onChange={personalLoanFormDetailsChangeHandler} required/>
              <br/>
              {personalLoanFormDetails.loanAmount!==null&&(personalLoanFormDetails.loanAmount.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave loan Amount Empty</small>)}
              {(personalLoanFormDetails.loanAmount!==null&&personalLoanFormDetails.loanAmount.trim()!=="")&&(validatePersonalLoanAmount()&&<small style={{color:"red"}}>&nbsp;&nbsp;*loan Amount cannot be negative or zero</small>)}
              </div> 
              <div className="col-lg-6">
              <label>Annual Income</label>
              <input type='number' id="annualIncome" placeholder='Annual Income' value={personalLoanFormDetails.annualIncome} onChange={personalLoanFormDetailsChangeHandler} required/>
              <br/>
              {personalLoanFormDetails.annualIncome!==null&&(personalLoanFormDetails.annualIncome.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Annual Income Empty</small>)}
              {(personalLoanFormDetails.annualIncome!==null&&personalLoanFormDetails.annualIncome.trim()!=="")&&(validatePersonalAnnualIncome()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Annual Income cannot be negative or zero</small>)}
              </div>
              </div>
             <br/>
             <button type="submit" onClick={personalLoanFormSubmitHandler}>Sumbit</button>
             <p style={{"color":"rgb(170, 235, 247)"}}>-</p>
             </form> }           
             </div>

            }
             
             </div> 
       </div>
    </div>
    )
}
export default ApplyForLoan;