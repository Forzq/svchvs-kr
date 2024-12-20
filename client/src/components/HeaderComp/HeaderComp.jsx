import '../HeaderComp/HeaderComp.css';
import HeaderNav from '../headerNav/headerNav' 
import { Link } from 'react-router-dom';
import Account from "../Account/Account"
export default function  HeaderComp(){  
    return(
        <header>
            <Link className='headerlogo' to ="/">
            <img  src={process.env.REACT_APP_API_URL + "logo.png"} alt="" />
            </Link>
            <HeaderNav/>               
                <div className='Header_div'>
                    <Account/>
                </div>
            </header>
    )
}