import { Link } from 'react-router-dom';
import { ENGINE_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import './headerNav.css';

export default function HeaderNav() {
    return (
        <div className="headerNavigation">
            <Link to="/" className="nav-link"><p>Home</p></Link>
            <Link to={ENGINE_ROUTE} className="nav-link"><p>ENGINE TUNE</p></Link>
            <p className="nav-item">TRANSMISSION TUNE</p>
            <Link to={SHOP_ROUTE} className="nav-link"><p>ALL PRODUCTS</p></Link>
        </div>
    );
}
