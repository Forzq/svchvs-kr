import React, { useContext, useState, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import HeaderComp from '../HeaderComp/HeaderComp';
import SelectBrandComp from '../SelectBrandComp';
import '../TransTune/TransTune.css';
import { Context } from '../../index';
import { fetchBrands, fetchModels, fetchTypes, fetchProducts } from '../../http/productAPI';
import EngineList from '../EngineList/EngineList';
import Footer from '../Footer/Footer';

const EngineTune = () => {
    const { product } = useContext(Context);
    const [selectedBrand, setSelectedBrand] = useState('');  // Состояние для выбранного бренда

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
        fetchModels().then(data => product.setModels(data));
        fetchProducts().then(data => product.setProducts(data));
    }, [product]);

    // Сопоставляем тип с id = 2 (transmission)
    const engineTypeId = product.types.find(type => type.id === 2)?.id;

    console.log("Engine Type ID:", engineTypeId);  // Логируем id типа для фильтрации

    return useObserver(() => (
        <div className="transmission-page"> {/* Main container */}
                <HeaderComp />
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Tune for Transmission</h1>
                    </div>
                </div>
           <SelectBrandComp setSelectedBrand={setSelectedBrand} />  {/* Передаем setSelectedBrand */}
            <EngineList 
                selectedBrand={selectedBrand} 
                engineTypeId={engineTypeId}  
            />
            <Footer/>
        </div>
    ));
};

export default EngineTune;
