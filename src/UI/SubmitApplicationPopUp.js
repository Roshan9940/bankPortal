import './PopUp.css'
import { useHistory } from 'react-router';

const SubmitApplicationPopUp=(props)=>{
    const history = useHistory();
    const handleClick = () => history.push('/Home');
    return(
    <div className="backdrop" onClick={handleClick}>
    <div className="modalz">
        <header className="headerz">
           <h2>{props.title}</h2>
        </header>
        <div className="contentz">
            <p>{props.message}</p>
           
        </div>
        <footer className="actions">
           <button className="btn btn-sucess">Return Home</button>
        </footer>
    </div></div>)
    
}
export default SubmitApplicationPopUp;