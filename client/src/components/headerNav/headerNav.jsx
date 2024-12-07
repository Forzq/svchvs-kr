import { color } from '@mui/system';
import {Link} from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import '../headerNav/headerNav.css'

export default function headerNav() {

  
    return (
        <div className="headerNavigation">
  <Link style ={{color:'green'}}  to ="/"><p>Home</p></Link>
  <Link style ={{color:'green'}}  to ={SHOP_ROUTE}><p>ENGINE TUNE</p></Link>
  <p>TRANSMISSION TUNE</p>
  <p>ALL PRODUCTS</p>
  </div>
        
    );
  }