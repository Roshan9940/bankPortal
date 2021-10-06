import React,{useState} from 'react';
import axios from 'axios';
import '../Registration/RegistrationForm.css';
import NavigationBar from './NavigationBar';
import SubmitApplicationPopUp from '../UI/SubmitApplicationPopUp';
import { useHistory } from 'react-router';

const EditDetails = (props) => {
    const userId=window.sessionStorage.getItem("userId")
    const [userDetails,setUserDetails]=useState({})
    const History=useHistory()
    const[y,sety]=useState(1)
    if(y===1)
    {
      axios.get('http://localhost:30727/api/Accounts/'+userId).then((response)=>{
    setUserDetails(response.data)}).catch(error=>
      {History.push('/Error');console.log(error.request.status)})
    sety(2);
     }
   
    
  var friendGaurdianType=false  
  const[popUpCondition,setPopUpCondition]=useState(false)
  if(userDetails.guardianType==="friend")
     friendGaurdianType=true;
  
  const validateGaurdianName=()=>{
    if(userDetails.guardianName.search(/[^A-Za-z\s]/) !== -1 )
      return true;
    return false;

  }
  const validateAddress=()=>{
    if(userDetails.address.trim()==="")
      return true;
    return false;
  }
  const validateCitizenShip=()=>{
    if(userDetails.citizenship.search(/[^A-Za-z\s]/) !== -1)
     return true;
    return false;
  }
  const validateState=()=>{
    if(userDetails.state.search(/[^A-Za-z\s]/) !== -1)
      return true;
    return false;
  }
  const validateCountry=()=>{
    if(userDetails.country.search(/[^A-Za-z\s]/) !== -1 )
      return true;
    return false;
  }
  
  const validateBranchName=()=>{
    if(userDetails.branchName.search(/[^A-Za-z\s]/) !== -1)
     return true;
    return false;
  }
  const aadharValidate=()=>{
    if(userDetails.identificationNumber.length===12){
        if (!(isNaN(userDetails.identificationNumber)))
            return false
        
    }
    return true 
  }
  const dobValidate=()=>{
    var currentYear= new Date().getFullYear();                
    var dobYear=new Date(userDetails.dateOfBirth).getFullYear();
    var ageInYear =currentYear - dobYear;
    if((ageInYear>=18)&&(ageInYear<96)){
        return true
    }
    return false
}
  const panValidate=()=>{
    let condition=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if(condition.test(userDetails.identificationNumber)){
      return false;
    }
    return true;
  }
  const validateRefAccountHolderName=()=>{
    if(userDetails.refAccountHolderName.search(/[^A-Za-z\s]/) !== -1)
     return true;
    return false;
  }
  const validateRefAccountHolderNumber=()=>{
    if(userDetails.refAccountHolderNumber.length!==15)
      return true;
    return false;

  }
  const validateRefAccountHolderAddress=()=>{
    if(userDetails.refAccountHolderAddress.trim()==="")
      return true;
    return false;
  }
  
  const detailsChangeHandler = (event) => {
    const {id , value} = event.target 
    setUserDetails(prevState => ({
        ...prevState,
        [id] : value
    }))    
}
  

const submitHandler=(event)=>{
  axios.put('http://localhost:30727/api/Accounts/'+userId,{userId: userDetails.userId,
  accountNo: userDetails.accountNo,
  citizenshipStatus: userDetails.citizenshipStatus,
  fullName: userDetails.fullName,
  userName: userDetails.userName,
  password: userDetails.password,
  gender: userDetails.gender,
  guardianType: userDetails.guardianType,
  guardianName: userDetails.guardianName,
  address: userDetails.address,
  citizenship: userDetails.citizenship,
  state:userDetails.state,
  country: userDetails.country,
  email: userDetails.email,
  maritalStatus: userDetails.maritalStatus,
  contactNumber: userDetails.contactNumber,
  dateOfBirth:userDetails.dateOfBirth,
  registrationDate:userDetails.registrationDate,
  accountType:userDetails.accountType,
  branchName: userDetails.branchName,
  initialDepositAmount: userDetails.initialDepositAmount,
  documentType: userDetails.documentType,
  identificationNumber: userDetails.identificationNumber,
  refAccountHolderName: userDetails.refAccountHolderName,
  refAccountHolderNumber: userDetails.refAccountHolderNumber,
  refAccountHolderAddress: userDetails.refAccountHolderAddress}).then((response)=>{
}).catch(error=>
  {History.push('/Error');console.log(error.request.status)})
  console.log(userDetails);
  event.preventDefault();
  setPopUpCondition(true);
     
     
}
  
  return (
      <div>
         {popUpCondition&&<SubmitApplicationPopUp title="Successfull!!" message="Details Updated Successfully" ></SubmitApplicationPopUp>}
    <NavigationBar/>
    <div className="new-register" >
      
      <form onSubmit={submitHandler} >
      <div className='new-reg__controls'>
        <div className='new-reg__control'>
          <h2>Edit Details</h2>
          <div className="row">
            <div className="col-lg-4">
              <label>User Id</label>
              <input type='text' id="userId" value={userDetails.userId}  required disabled/>
            </div>
            <div className="col-lg-4">
              <label>Account No</label>
              <input type='text' id="Account No"  value={userDetails.accountNo}  required disabled/>
            </div>
            <div className="col-lg-4">
              <label>Full Name</label>
             <input type='text' id="fullName" placeholder='Name' value={userDetails.fullName} required disabled/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4">
              <label>User&nbsp;Name</label>
              <input type='text' id="userName"   required  value={userDetails.userName} onChange={detailsChangeHandler}/>
            </div>  
            <div className="col-lg-4"> 
              <label>Password</label>
              <input type='password' id="password" placeholder="Password" required value={userDetails.password} onChange={detailsChangeHandler}/>
              <br/>
            </div>  
            <div className="col-lg-4"> 
            <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender" value={userDetails.gender} onChange={detailsChangeHandler}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="guardianType">Gaurdian Type</label>
              <select name="guardianType" id="guardianType" value={userDetails.gaurdianType} onChange={detailsChangeHandler}>
                <option value="relation" >Relation</option>
                <option value="friend" selected={friendGaurdianType}>Friend</option>
              </select>
            </div>
            <div className="col-lg-4">
              <label>Gaurdian Name</label>
              <input type='text' id="guardianName" placeholder='Gaurdian Name' required value={userDetails.guardianName} onChange={detailsChangeHandler}/>
              <br/>
              {(userDetails.guardianName!==undefined)&&(userDetails.guardianName===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Gaurdian Name Empty</small>)}
              {userDetails.guardianName!==undefined&&(validateGaurdianName() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Gaurdian Name cannot have digits or special characters</small>)}
            </div>
            <div className="col-lg-4">
              <label>Address</label>
              <input type='text' id="address" placeholder='Address' required value={userDetails.address} onChange={detailsChangeHandler}/>
              <br/>
              {userDetails.address!==undefined&&(validateAddress()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Gaurdian Name Empty</small>)}
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4">
              <label>Citizenship</label>
              <input type='text' id="citizenship" placeholder='Citizenship' required value={userDetails.citizenship} onChange={detailsChangeHandler}/>
              <br/>
              {userDetails.citizenship!==undefined&&(userDetails.citizenship.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave CitizenShip Empty</small>)}
              {userDetails.citizenship!==undefined&&(validateCitizenShip() &&<small style={{color:"red"}}>&nbsp;&nbsp;*CitizenShip can only have characters</small>)}
            </div>
            <div className="col-lg-4">
              <label>State</label>
              <input type='text' id="state" placeholder='State' required value={userDetails.state} onChange={detailsChangeHandler}/>
              <br/>
              {userDetails.state!==undefined&&(userDetails.state.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave State Empty</small>)}
              {userDetails.state!==undefined&&(validateState() &&<small style={{color:"red"}}>&nbsp;&nbsp;*State Name cannot have digits or special characters</small>)}
            </div>
            <div className="col-lg-4">
              <label>Country</label>
              <input type='text' id="country" placeholder='Country' value={userDetails.country} onChange={detailsChangeHandler}/>
              <br/>
              {userDetails.country!==undefined&&(userDetails.country.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Country Empty</small>)}
          {userDetails.country!==undefined&&(validateCountry()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Country Name cannot have digits or special characters</small>)}
          
            </div>
            </div>
          <br/>
          <div className="row">
            <div className="col-lg-4">
          <label>Email</label>
          <input
            type='email' id="email" placeholder='Email ID' required value={userDetails.email} disabled
          />
          </div>
          <div className="col-lg-4">
          <label>Contact Number</label>
          <input type='number' id="contactNumber" placeholder='Contact' required value={userDetails.contactNumber} disabled/>
          <br/>
          </div>
          <div className="col-lg-4">
          <label htmlFor="martialStatus">Marital Status</label>
            <select name="martialStatus" id="maritalStatus" value={userDetails.maritalStatus} onChange={detailsChangeHandler}>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            </div>
            </div>
          <br/>
          <div className="row">
            <div className="col-lg-4">
          <label>Date Of Birth</label>
          <input
            type='date' id="dateOfBirth" placeholder='Date of birth' value={userDetails.dateOfBirth} max={new Date().toISOString().substr(0,10)} onChange={detailsChangeHandler}
           disabled/>
          <br/>
          {(userDetails.dateOfBirth!==undefined)&&((userDetails.dateOfBirth==="")? (<small style={{"color":"red"}}>Date of Birth should not be Empty</small>)
                               : ((dobValidate()? null
                               : (<small style={{"color":"red"}}>Account holders age should be 18 to 96 only</small>))))}
           </div>
          <div className="col-lg-4"> 
          <label>Citizenship Status</label>
          <input type='text' id="citizenshipStatus" value={userDetails.citizenshipStatus} onChange={detailsChangeHandler} disabled/>
           </div>
          <div className="col-lg-4">
           <label>Registeration Date</label>
          <input type='date' id="regDate"  value={userDetails.registrationDate} disabled={true}/>
          </div>
          </div>    
          <br/>  
          <div className="row">
            <div className="col-lg-4">  
            <label htmlFor="documentType">Document Type</label>
          <select name="documentType" id="documentType" value={userDetails.documentType} onChange={detailsChangeHandler}>
              <option value="Pan">Pan Card</option>
              <option value="Aadhar">Aadhar Card</option>
          </select>
            </div>
          <div className="col-lg-4">
          
          <label htmlFor="idDocumentNumber">Identification Document Number</label>
          <input type="text" id="identificationNumber" value={userDetails.identificationNumber} required placeholder="Identification Number" onChange={detailsChangeHandler}></input>
          <br/>
          {userDetails.identificationNumber!==undefined&&(userDetails.identificationNumber.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Document Number Empty</small>)}
          {userDetails.documentType==="Pan"? 
           (userDetails.identificationNumber!==undefined&&userDetails.identificationNumber.trim()!=="")&&((panValidate())&&<small style={{color:"red"}}>&nbsp;&nbsp;*Invalid {userDetails.documentType} card number</small>)
           :(userDetails.identificationNumber!==undefined&&userDetails.identificationNumber.trim()!=="")&&((aadharValidate())&&<small style={{color:"red"}}>&nbsp;&nbsp;*Invalid {userDetails.documentType} card number</small>)
          }</div>
          <div className="col-lg-4">
          <label htmlFor="branchName">Branch Name</label>
          <input type="text" id="branchName" placeholder="Branch Name" value={userDetails.branchName} onChange={detailsChangeHandler}></input>          
          <br/>
          {userDetails.branchName!==undefined&&(userDetails.branchName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Branch Name Empty</small>)}
          {userDetails.branchName!==undefined&&(validateBranchName() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Branch Name cannot have digits or special characters</small>)}
          </div></div>

          <br/>
          <div className="row">
            <div className="col-lg-4">
            <label htmlFor="refAccountHolderName">Reference Account Holder Name</label>
          <input type="text" id="refAccountHolderName" value={userDetails.refAccountHolderName} required placeholder="Reference Account Holder Name" onChange={detailsChangeHandler}></input>
          <br/>
          {userDetails.refAccountHolderName!==undefined&&(userDetails.refAccountHolderName.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Reference Account Holder  Name Empty</small>)}
          {userDetails.refAccountHolderName!==undefined&&(validateRefAccountHolderName() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Reference Account Holder Name cannot have digits or special characters</small>)}

          </div>
          <div className="col-lg-4"> 
          <label htmlFor="refAccountHolderNumber">Reference Account Holder Number</label>
          <input type="number" id="refAccountHolderNumber" value={userDetails.refAccountHolderNumber} required placeholder="Reference Account Holder Number" onChange={detailsChangeHandler}></input>
          <br/>
          {userDetails.refAccountHolderNumber!==undefined&&(userDetails.refAccountHolderNumber.trim()===""&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Reference Account Holder Number Empty</small>)}
          {(userDetails.refAccountHolderNumber!==undefined&&userDetails.refAccountHolderNumber.trim()!=="")&&(validateRefAccountHolderNumber() &&<small style={{color:"red"}}>&nbsp;&nbsp;*Reference Account Holder Number should be of 15 Digits</small>)}
         
          </div>
          <div className="col-lg-4">
          <label htmlFor="refAccountHolderAddress">Reference Account Holder Address</label>
          <input type="text" id="refAccountHolderAddress" value={userDetails.refAccountHolderAddress} required placeholder="Reference Account Holder Address" onChange={detailsChangeHandler}></input>
           <br/>
           {userDetails.refAccountHolderAddress!==undefined&&(validateRefAccountHolderAddress()&&<small style={{color:"red"}}>&nbsp;&nbsp;*Cannot leave Reference Account Holder Address Empty</small>)}
          
          </div></div>
          <br/>

        </div>
       </div>
      <div className='new-reg__actions'>
         <button type='submit'>Edit and Submit</button>
      </div>
    </form>
    </div>
    </div>

  );
};

export default EditDetails;