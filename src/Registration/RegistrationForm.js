import React,{useState} from 'react';
import { useHistory } from 'react-router';
import './RegistrationForm.css';
import axios from 'axios';
import PopUp from '../UI/RegistrationSuccessfullPopUp';

const RegistrationForm = (props) => {
  const regDate = new Date().toISOString().substr(0,10);
  const [details,setDetails]=useState({fullName:null,
                                       userName:null,
                                       password:null,
                                       gender:'male',
                                       guardianType:'relation',
                                       guardianName:null,
                                       address:null,
                                       citizenship:null,
                                       state:null,
                                       country:null,
                                       email:null,
                                       contactNumber:null,
                                       maritalStatus:'single',
                                       dateOfBirth:null,
                                       registrationDate:regDate,
                                       accountType:'savings',
                                       initialDepositAmount:5000,
                                       branchName:null,
                                       documentType:'Pan',
                                       idDocumentNumber:null,
                                       refAccountHolderName:null,
                                       refAccountHolderNumber:null,
                                       refAccountHolderAddress:null,
                                       
                                       })
  const[citizenShipStatus,setCitizenshipStatus]=useState("");
  const[minInitialDepositAmount,setMinInitialDepositAmount]=useState(5000)
  const[popUpCondition,setPopUpCondition]=useState(false)
  const History=useHistory()
  const validateFullName=()=>{
    if(details.fullName.search(/[^A-Za-z\s]/) !== -1 )
      return true;
    return false;

  }
  const validatePassword=()=>{
      if(details.password.length<7)
        return true;
        
  }
  const validateGuardianName=()=>{
    if(details.guardianName.search(/[^A-Za-z\s]/) !== -1 )
      return true;
    return false;

  }
  const validateAddress=()=>{
    if(details.address.trim()==="")
      return true;
    return false;
  }
  const validateCitizenShip=()=>{
    if(details.citizenship.search(/[^A-Za-z\s]/) !== -1)
     return true;
    return false;
  }
  const validateState=()=>{
    if(details.state.search(/[^A-Za-z\s]/) !== -1)
      return true;
    return false;
  }
  const validateCountry=()=>{
    if(details.country.search(/[^A-Za-z\s]/) !== -1 )
      return true;
    return false;
  }
  const validateEmail=()=>{
    if(!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(details.email))
     return true;
    return false;

  }
  const validateContactNumber=()=>{
    if(details.contactNumber.length!==10)
      return true;
    return false;
  }
  const validateBranchName=()=>{
    if(details.branchName.search(/[^A-Za-z\s]/) !== -1)
     return true;
    return false;
  }
  const aadharValidate=()=>{
    if(details.idDocumentNumber.length===12){
        if (!(isNaN(details.idDocumentNumber)))
            return false
        
    }
    return true 
  }
  const dobValidate=()=>{
    var currentYear= new Date().getFullYear();                
    var dobYear=new Date(details.dateOfBirth).getFullYear();
    var ageInYear =currentYear - dobYear;
    if((ageInYear>=18)&&(ageInYear<96)){
        return true
    }
    return false
}
  const panValidate=()=>{
    let condition=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if(condition.test(details.idDocumentNumber)){
      return false;
    }
    return true;
  }
  const validateRefAccountHolderName=()=>{
    if(details.refAccountHolderName.search(/[^A-Za-z\s]/) !== -1)
     return true;
    return false;
  }
  const validateRefAccountHolderNumber=()=>{
    if(details.refAccountHolderNumber.length!==15)
      return true;
    return false;

  }
  const validateRefAccountHolderAddress=()=>{
    if(details.refAccountHolderAddress.trim()==="")
      return true;
    return false;
  }
  const detailsChangeHandler = (event) => {
    const {id , value} = event.target 
    setDetails(prevState => ({
        ...prevState,
        [id] : value
    })) 
    if(id==="dateOfBirth")
    {
      var currentYear= new Date().getFullYear();                
      var dobYear=new Date(details.dateOfBirth).getFullYear();
      
      if(currentYear - dobYear<18)
        setCitizenshipStatus("Minor");
      else if(currentYear - dobYear>60)
        setCitizenshipStatus("Senior Citizen")
      else
        setCitizenshipStatus("Citizen")
    }
      
    
    
   
    if(event.target.id==='accountType')
    {
      if(event.target.value==='salary')
      {
        setMinInitialDepositAmount(0);
      }
      else{
        setMinInitialDepositAmount(5000);
      }
    }
   
}
  
const [userDetails,setUserDetails]=useState({})
const submitHandler=(event)=>{
  event.preventDefault();

  if((!validateFullName()&&!validatePassword()&&
     !validateAddress()&&!validateCitizenShip()&&
     !validateBranchName()&&!validateContactNumber()&&
     !validateEmail()&&!validateGuardianName()&&
     !validateRefAccountHolderAddress()&&!validateRefAccountHolderName()&&
     !validateRefAccountHolderNumber())&&dobValidate()&&(aadharValidate()||panValidate()))
     {  
      axios.post("http://localhost:30727/api/Accounts",{fullName:details.fullName,
                                                        userName:details.userName,
                                                        password:details.password,
                                                        gender:details.gender,
                                                        guardianType:details.guardianType,
                                                        guardianName:details.guardianName,
                                                        address:details.address ,
                                                        citizenship:details.citizenship,
                                                        state:details.state ,
                                                        country:details.country,
                                                        email:details.email,
                                                        maritalStatus:details.maritalStatus,
                                                        contactNumber:details.contactNumber,
                                                        dateOfBirth:details.dateOfBirth,
                                                        registrationDate:details.registrationDate,
                                                        accountType:details.accountType,
                                                        branchName:details.branchName,   
                                                        initialDepositAmount:details.initialDepositAmount,
                                                        citizenshipStatus:citizenShipStatus,
                                                        documentType:details.documentType,
                                                        identificationNumber:details.idDocumentNumber,
                                                        refAccountHolderName:details.refAccountHolderName,
                                                        refAccountHolderNumber:details.refAccountHolderNumber,
                                                        refAccountHolderAddress:details.refAccountHolderAddress,
                                                        }).then((response)=>{setUserDetails(response.data);setPopUpCondition(true);})
                                                          .catch(error=>
                                                          {History.push('/Error');console.log(error.request.status)})
    
     
     }

}
  
  return (
    <div>
      
      {popUpCondition&&<PopUp title="Registration Successfull" userId={userDetails.userId} accountNo={userDetails.accountNo}></PopUp>}
      <form onSubmit={submitHandler} >
      <div className='new-reg__controls'>
        <div className='new-reg__control'>
          <div className="row">
            <div className="col-lg-4">
             <label>Full Name</label>
               <input type='text' id="fullName" placeholder='Name' value={details.fullName} onChange={detailsChangeHandler} required/>
               <br/>
               {details.fullName!==null&&(details.fullName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Name Empty</small>)}
               {details.fullName!==null&&(validateFullName()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Name cannot have digits or special characters</small>)}
            </div>
            <div className="col-lg-4">
              <label>User&nbsp;Name</label>
              <input type='text' id="userName"  placeholder="User name" required value={details.userName} onChange={detailsChangeHandler}/>
            </div>
            <div className="col-lg-4">
              <label>Password</label>
              <input type='password' id="password" placeholder="Password" required value={details.password} onChange={detailsChangeHandler}/>
              <br/>
              {details.password!==null&&(details.password.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Password Empty</small>)}
              {(details.password!==null&&details.password.trim()!=="")&&(validatePassword() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Password should atleast contain 8 characters</small>)}
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4">
             <label htmlFor="gender">Gender</label>
             <select name="gender" id="gender" value={details.gender} onChange={detailsChangeHandler}>
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select>
            </div>
            <div className="col-lg-4">
             <label htmlFor="guardianType">Guardian Type</label>
             <select name="guardianType" id="guardianType" value={details.guardianType} onChange={detailsChangeHandler}>
               <option value="relation">Relation</option>
               <option value="friend">Friend</option>
             </select>
            </div>
            <div className="col-lg-4">
              <label>Guardian Name</label>
              <input type='text' id="guardianName" placeholder='Guardian Name' required value={details.guardianName} onChange={detailsChangeHandler}/>
              <br/>
              {details.guardianName!==null&&(details.guardianName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Guardian Name Empty</small>)}
              {details.guardianName!==null&&(validateGuardianName() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Guardian Name cannot have digits or special characters</small>)}
            </div>
           </div>
           <br/>
           <div className="row">
            <div className="col-lg-4">
              <label>Address</label>
              <input type='text' id="address" placeholder='Address' required value={details.address} onChange={detailsChangeHandler}/>
              <br/>
              {details.address!==null&&(validateAddress()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Guardian Name Empty</small>)}
            </div>
            <div className="col-lg-4">
             <label>Citizenship</label>
             <input type='text' id="citizenship" placeholder='Citizenship' required value={details.citizenship} onChange={detailsChangeHandler}/>
             <br/>
             {details.citizenship!==null&&(details.citizenship.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave CitizenShip Empty</small>)}
             {details.citizenship!==null&&(validateCitizenShip() &&<small style={{color:"red"}}>&nbsp;&nbsp;*CitizenShip can only have characters</small>)}
            </div>
            <div className="col-lg-4">
             <label>State</label>
             <input type='text' id="state" placeholder='State' required value={details.state} onChange={detailsChangeHandler}/>
             <br/>
             {details.state!==null&&(details.state.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave State Empty</small>)}
             {details.state!==null&&(validateState() &&<small style={{color:"red"}}>&nbsp;&nbsp;*State Name cannot have digits or special characters</small>)}
            </div>
          </div>
          <br/>
          <div className="row">
           <div className="col-lg-4">
          <label>Country</label>
          <input type='text' id="country" placeholder='Country' value={details.country} onChange={detailsChangeHandler}/>
          <br/>
          {details.country!==null&&(details.country.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Country Empty</small>)}
          {details.country!==null&&(validateCountry()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Country Name cannot have digits or special characters</small>)}
          </div>
          <div className="col-lg-4">
          <label>Email</label>
          <input type='email' id="email" placeholder='Email ID' required value={details.email} onChange={detailsChangeHandler}/>
          <br/>
          {details.email!==null&&(details.email.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Email Empty</small>)}
          {(details.email!==null&&details.email.trim()!=="")&&(validateEmail() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Please enter a valid Email Id</small>)}
          </div>
          <div className="col-lg-4">
          <label>Contact Number</label>
          <input
            type='number' id="contactNumber" placeholder='Contact' required value={details.contactNumber} onChange={detailsChangeHandler}
          />
          <br/>
          {details.contactNumber!==null&&(details.contactNumber.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Contact Number Empty</small>)}
          {(details.contactNumber!==null&&details.contactNumber.trim()!=="")&&(validateContactNumber() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Contact number should be of 10 Digits</small>)}
          </div>
          </div>
          <br/>
          <div className="row">
           <div className="col-lg-4">
             <label htmlFor="maritalStatus">Marital Status</label>
             <select name="maritalStatus" id="maritalStatus" value={details.maritalStatus} onChange={detailsChangeHandler}>
               <option value="single">Single</option>
               <option value="married">Married</option>
             </select>
           </div>
           <div className="col-lg-4">
             <label>Date Of Birth</label>
             <input type='date' id="dateOfBirth" placeholder='Date of birth' value={details.dateOfBirth} max={new Date().toISOString().substr(0,10)} onChange={detailsChangeHandler}/>
             <br/>
             {(details.dateOfBirth!==null)&&((details.dateOfBirth==="")? (<small style={{"color":"red"}}>Date of Birth should not be Empty</small>)
                               : ((dobValidate()? null
                               : (<small style={{"color":"red"}}>Account holders age should be 18 to 96 only</small>))))}
           </div>
           <div className="col-lg-4">
             <label>Citizenship Status</label>
             <input type='text' id="citizenShipStatus" placeholder='Please fill D.O.B' value={citizenShipStatus} onChange={detailsChangeHandler} disabled/>
            </div>
         </div>
         <br/>
         <div className="row">
           <div className="col-lg-4">
             <label>Registeration Date</label>
             <input type='date' id="regDate"  value={details.registrationDate} disabled={true}/>    
           </div>
           <div className="col-lg-4">  
             <label htmlFor="accountType">Account Type</label>
             <select name="accountType" id="accountType" value={details.accountType} onChange={detailsChangeHandler}>
              <option value="savings">Savings</option>
              <option value="salary">Salary</option>
             </select>
            </div>
            <div className="col-lg-4">  
              <label htmlFor="initialDepositAmount">Initial Deposit Amount</label>
              <input type='number' id="initialDepositAmount" required min={minInitialDepositAmount} placeholder={minInitialDepositAmount}onChange={detailsChangeHandler}></input> 
            </div>
          </div>
          <br/>
          <div className="row">
           <div className="col-lg-4">
             <label htmlFor="branchName">Branch Name</label>
             <input type="text" id="branchName" placeholder="Branch Name" onChange={detailsChangeHandler}></input>          
             <br/>
             {details.branchName!==null&&(details.branchName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Branch Name Empty</small>)}
             {details.branchName!==null&&(validateBranchName() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Branch Name cannot have digits or special characters</small>)}
           </div>
           <div className="col-lg-4">  
             <label htmlFor="documentType">Document Type</label>
             <select name="documentType" id="documentType" value={details.documentType} onChange={detailsChangeHandler}>
              <option value="Pan">Pan Card</option>
              <option value="Aadhar">Aadhar Card</option>
             </select>
            </div>
            <div className="col-lg-4">  
              <label htmlFor="idDocumentNumber">Identification Document Number</label>
              <input type="text" id="idDocumentNumber" placeholder="Document Number" onChange={detailsChangeHandler}></input>
              <br/>
              {details.idDocumentNumber!==null&&(details.idDocumentNumber.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Document Number Empty</small>)}
              {details.documentType==="Pan"? 
              (details.idDocumentNumber!==null&&details.idDocumentNumber.trim()!=="")&&((panValidate())&&<small style={{color:"red"}}>&nbsp;&nbsp;*Invalid {details.documentType} card number</small>)
              :(details.idDocumentNumber!==null&&details.idDocumentNumber.trim()!=="")&&((aadharValidate())&&<small style={{color:"red"}}>&nbsp;&nbsp;*Invalid {details.documentType} card number</small>)
              }
           </div>
          </div>
          <br/>
          <div className="row">
           <div className="col-lg-4">
             <label htmlFor="refAccountHolderName">Reference Account Holder Name</label>
             <input type="text" id="refAccountHolderName" required placeholder="Reference Account Holder Name" onChange={detailsChangeHandler}></input>
             <br/>
             {details.refAccountHolderName!==null&&(details.refAccountHolderName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Reference Account Holder  Name Empty</small>)}
             {details.refAccountHolderName!==null&&(validateRefAccountHolderName() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Reference Account Holder Name cannot have digits or special characters</small>)}
            </div>
            <div className="col-lg-4">  
             <label htmlFor="refAccountHolderNumber">Reference Account Holder Number</label>
             <input type="number" id="refAccountHolderNumber" required placeholder="Reference Account Holder Number" onChange={detailsChangeHandler}></input>
             <br/>
             {details.refAccountHolderNumber!==null&&(details.refAccountHolderNumber.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Reference Account Holder Number Empty</small>)}
             {(details.refAccountHolderNumber!==null&&details.refAccountHolderNumber.trim()!=="")&&(validateRefAccountHolderNumber() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Reference Account Holder Number should be of 15 Digits</small>)}
            </div>
            <div className="col-lg-4">  
             <label htmlFor="refAccountHolderAddress">Reference Account Holder Address</label>
             <input type="text" id="refAccountHolderAddress" required placeholder="Reference Account Holder Address" onChange={detailsChangeHandler}></input>
             <br/>
             {details.refAccountHolderAddress!==null&&(validateRefAccountHolderAddress()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Reference Account Holder Address Empty</small>)}
           </div>
          </div>
        </div>
       </div>
      <div className='new-reg__actions'>
         <button type='submit'>Register</button>
      </div>
    </form>
    </div>

  );
};

export default RegistrationForm;