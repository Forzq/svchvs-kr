import React, { useContext, useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { useObserver } from 'mobx-react-lite';
import HeaderComp from '../HeaderComp/HeaderComp';
import SelectBrandComp from '../SelectBrandComp';
import '../../pages/Store.css';
import { Context } from '../../index';
import { fetchBrands, fetchModels, fetchTypes, fetchProducts} from '../../http/productAPI';
import EngineList from '../EngineList/EngineList';

const EngineTune = () => {
    const {product} = useContext(Context);
    const [selectedBrand, setSelectedBrand] = useState('');  // Состояние для выбранного бренда

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
        fetchModels().then(data => product.setModels(data));
        fetchProducts().then(data => product.setProducts(data));
    }, [product]);

    return useObserver(() => (
        <div>
            <div className='likeHeader'>
                <HeaderComp/>
                <div className='backImg'>
                    <img src={process.env.REACT_APP_API_URL + 'enginepage.png'}/>
                </div>
            </div>
            <SelectBrandComp setSelectedBrand={setSelectedBrand} />  {/* Передаем setSelectedBrand */}
            <EngineList selectedBrand={selectedBrand} />  {/* Передаем выбранный бренд в ProductList */}
        </div>
    ));
};

export default EngineTune;