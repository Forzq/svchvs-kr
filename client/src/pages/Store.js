import React from 'react';
import HeaderComp from '../components/HeaderComp/HeaderComp';
import SelectBrandComp from '../components/SelectBrandComp';

import ProductList from '../components/ProductList/ProductList';
const Store = () => {
    return (
        <div>
            <HeaderComp/>
            <SelectBrandComp/>
            <ProductList/>
        </div>
    );
};

export default Store;