import React from 'react';
import HeaderComp from '../components/HeaderComp/HeaderComp';
import SelectBrandComp from '../components/SelectBrandComp';
import ProductCard from '../components/productCard'
const Store = () => {
    return (
        <div>
            <HeaderComp/>
            <SelectBrandComp/>
            <ProductCard/>
        </div>
    );
};

export default Store;