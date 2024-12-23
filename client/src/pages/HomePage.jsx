import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import HeaderComp from '../components/HeaderComp/HeaderComp';
import '../pages/Store.css';
import { SHOP_ROUTE } from '../utils/consts';

export default function HomePage(){
    return(
        <div className='home-page'>
            {/* More descriptive class name */}
                <HeaderComp/>
                <div className='hero-image-container'> {/* More descriptive class name */}
                    <div className='hero-content'> {/* Container for text content */}
                        <h1 className='hero-title'>ALPINE MOTORSPORTS</h1>
                        <p className='hero-subtitle'>The Leaders In Custom Engine Tuning For BMW, Audi, Mercedes, Ferrari, McLaren & Lamborghini!</p>
                        <NavLink to={SHOP_ROUTE}><button className='discover-button'>DISCOVER MORE</button> </NavLink>
                        
                    </div>
                </div>
            
            <Footer/>
        </div>
    )
}