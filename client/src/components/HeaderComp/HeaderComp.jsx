import '../HeaderComp/HeaderComp.css';
import HeaderNav from '../headerNav/headerNav' 
// import Search from "../../MUI components/Search.jsx"
// import Account from "../../MUI components/Account.jsx"
import { Link } from 'react-router-dom';
import Account from "../Account/Account"
export default function  HeaderComp(){  
    return(
        <header>
            <Link className='headerName' to ="/"><img  src="http://localhost:5000/logo.png" alt="" /></Link>
            <HeaderNav/>               
                <div className='Header_div'>
                    <Account/>
                </div>
            </header>
    )
}