import React, { useContext, useEffect } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { useObserver } from 'mobx-react-lite';

import HeaderComp from '../components/HeaderComp/HeaderComp';
import SelectBrandComp from '../components/SelectBrandComp';
import '../pages/Store.css';
import { Context } from '../index';
import { fetchBrands, fetchModels, fetchTypes, fetchProducts } from '../http/productAPI';
const Store = () => {
    const {product} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
        fetchModels().then(data => product.setModels(data))
        fetchProducts().then(data => product.setProducts(data))
    }, [])

    return useObserver(() =>(
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
    ));
};

export default Store;