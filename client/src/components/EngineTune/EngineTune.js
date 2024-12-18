import React, { useContext, useState, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import HeaderComp from '../HeaderComp/HeaderComp';
import SelectBrandComp from '../SelectBrandComp';
import '../../pages/Store.css';
import { Context } from '../../index';
import { fetchBrands, fetchModels, fetchTypes, fetchProducts } from '../../http/productAPI';
import EngineList from '../EngineList/EngineList';

const EngineTune = () => {
    const { product } = useContext(Context);
    const [selectedBrand, setSelectedBrand] = useState('');  // Состояние для выбранного бренда

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
        fetchModels().then(data => product.setModels(data));
        fetchProducts().then(data => product.setProducts(data));
    }, [product]);

    // Сопоставляем тип с id = 1 (engine-tuning)
    const engineTypeId = product.types.find(type => type.id === 1)?.id;

    console.log("Engine Type ID:", engineTypeId);  // Логируем id типа для фильтрации

    return useObserver(() => (
        <div>
            <div className='likeHeader'>
                <HeaderComp />
                <div className='backImg'>
                    <img src={process.env.REACT_APP_API_URL + 'engine.png'} />
                </div>
            </div>
            <SelectBrandComp setSelectedBrand={setSelectedBrand} />  {/* Передаем setSelectedBrand */}
            <EngineList 
                selectedBrand={selectedBrand} 
                engineTypeId={engineTypeId}  
            />
        </div>
    ));
};

export default EngineTune;
