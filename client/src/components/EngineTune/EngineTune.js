import React, { useContext, useState, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import HeaderComp from '../HeaderComp/HeaderComp';
import SelectBrandComp from '../SelectBrandComp';

import '../EngineTune/EngineTune.css'
import { Context } from '../../index';
import { fetchBrands, fetchModels, fetchTypes, fetchProducts } from '../../http/productAPI';
import EngineList from '../EngineList/EngineList.js';
import Footer from '../Footer/Footer.js';

const EngineTune = () => {
    const { product } = useContext(Context);
    const [selectedBrand, setSelectedBrand] = useState(''); // Состояние для выбранного бренда

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
        fetchModels().then(data => product.setModels(data));
        fetchProducts().then(data => product.setProducts(data));
    }, [product]);

    // Сопоставляем тип с id = 1 (engine-tuning)
    const engineTypeId = product.types.find(type => type.id === 1)?.id;

    console.log("Engine Type ID:", engineTypeId); // Логируем id типа для фильтрации

    return useObserver(() => (
        <div>
            <div className="engineTune-likeHeader">
                <HeaderComp />
                <div className="engineTune-backImg">
                    <div className="engineTune-overlayText">Tune for engine</div>
  
                </div>
            </div>
            <SelectBrandComp setSelectedBrand={setSelectedBrand} />
            <EngineList selectedBrand={selectedBrand} engineTypeId={engineTypeId} />
            <Footer/>
        </div>
    ));
    
};

export default EngineTune;
