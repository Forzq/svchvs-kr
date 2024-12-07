import { makeAutoObservable } from 'mobx';

export default class ProductStore {
    constructor() {
        this._typesOfTune = [
            {id: 1, name: 'engine-tuning'},
            {id: 2, name: 'transmission-tuning'},
            {id: 3, name: 'other-tuning'}
        ]
        this._brands = [
            {id: 1, name: 'bmw'},
            {id: 2, name: 'audi'}
        ]
        this._models = [
            {id:1, name: 'e60',CarbrandId:1, img:'https://upload.wikimedia.org/wikipedia/commons/c/c5/2003_BMW_520i_SE_2.2_Front.jpg'},
            {id:2, name: 'f10',CarbrandId:1, img:'https://upload.wikimedia.org/wikipedia/commons/c/c5/2003_BMW_520i_SE_2.2_Front.jpg'}
        ]
        this._products = [
            {
                id: 2,
                name: "Audi Performance Chip",
                horsepowerGain: 30,
                torqueGain: 40,
                description: "Performance chip for various Audi models. Improves horsepower and torque.",
                cost: 499.99,
                CarModelld: 1,  // Assuming CarModel has an ID
                TypeOfProductId: 1 // Assuming TypeOfProduct has an ID,
                
              },
              {
                id: 3,
                name: "BMW Cold Air Intake",
                horsepowerGain: 15,
                torqueGain: 20,
                description: "Cold air intake system for select BMW models. Enhances airflow for increased power.",
                cost: 299.99,
                CarModelld: 2,
                TypeOfProductId: 2
              },
              {
                id: 4,
                name: "Mercedes Exhaust System",
                horsepowerGain: 10,
                torqueGain: 15,
                description: "Performance exhaust system for Mercedes-Benz vehicles. Improves exhaust flow and sound.",
                cost: 799.99,
                CarModelld: 2,
                TypeOfProductId: 3
              }
        ]
        this._selectedBrand = {}
        makeAutoObservable(this);

    }
    setSelectedBrand(brands)
    {
        this._selectedBrand = brands
    }

    setTypes(types) {
        this._typesOfTune = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setProducts(product) {
        this._products = product;
    }
    setModels(models) {
        this._models = models;
    }

    get types(){
        return this._typesOfTune
    }
    get brands(){
        return this._brands
    }
    get models(){
        return this._models
    }
    get product(){
        return this._products
    }
}