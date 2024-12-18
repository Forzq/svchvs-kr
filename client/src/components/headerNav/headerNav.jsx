import { Link } from 'react-router-dom';
import { ENGINE_ROUTE, SHOP_ROUTE, TRANS_ROUTE } from '../../utils/consts';
import './headerNav.css';

export default function HeaderNav() {
    return (
        <div className="headerNavigation">
            <Link to="/" className="nav-link"><p>Home</p></Link>
            <Link to={ENGINE_ROUTE} className="nav-link"><p>ENGINE TUNE</p></Link>
            <Link to={TRANS_ROUTE} className="nav-link"><p>TRANSMISSION TUNE</p></Link>
            <Link to={SHOP_ROUTE} className="nav-link"><p>ALL PRODUCTS</p></Link>
        </div>
    );
}
