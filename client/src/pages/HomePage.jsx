import HeaderComp from '../components/HeaderComp/HeaderComp'
import '../pages/Store.css';

export default function HomePage(){
    return(
        <>
            <div className='likeHeader'>
                <HeaderComp/>
                <div className='backImg'>
                    <img src={process.env.REACT_APP_API_URL + 'homeimg.png'}/>
                </div>
            </div>
        </>
    )
}