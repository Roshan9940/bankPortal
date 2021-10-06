import './PopUp.css'
import { useHistory } from 'react-router';

const PopUp=(props)=>{
    const history = useHistory();
    const handleClick = () => history.push('/');
    return(
    <div className="backdrop" onClick={handleClick}>
    <div className="modalz">
        <header className="headerz">
           <h2>{props.title}</h2>
        </header>
        <div className="contentz">
            <p>User Id & Account Number Generated Successfully!!</p>
           <p><b>Please make note of Your User Id & Account Number</b></p>
           <p>User Id  :  {props.userId}</p>
           <p>Account Number  :  {props.accountNo}</p>
        </div>
        <footer className="actions">
           <button className="btn btn-sucess">Back To Login</button>
        </footer>
    </div></div>)
    
}
export default PopUp;