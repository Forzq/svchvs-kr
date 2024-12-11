import React from 'react';
import HeaderComp from '../components/HeaderComp/HeaderComp';
import SelectBrandComp from '../components/SelectBrandComp';
import '../components/Store.css';

import ProductList from '../components/ProductList/ProductList';
const Store = () => {
    return (
        <div>
            <div className='likeHeader'>
                <HeaderComp/>
                <div className='backImg'>
                    <img src={process.env.REACT_APP_API_URL + 'enginepage.png'}/>
                </div>
            </div>
            <SelectBrandComp/>
            <ProductList/>
        </div>
    );
};

export default Store;