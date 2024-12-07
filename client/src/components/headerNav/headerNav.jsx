import {Link} from 'react-router-dom';
import '../headerNav/headerNav.css'

export default function headerNav() {

  
    return (
        <div className="headerNavigation">
  <Link  to ="/"><p>Home</p></Link>
  <p>ENGINE TUNE</p>
  <p>TRANSMISSION TUNE</p>
  <p>ALL PRODUCTS</p>
  </div>
        
    );
  }