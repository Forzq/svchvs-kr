import { makeAutoObservable } from 'mobx';

export default class ProductStore {
    constructor() {
        this._typesOfTune = [
            {id: 1, name: 'engine-tuning'},
            {id: 2, name: 'transmission-tuning'},
            {id: 3, name: 'other-tuning'}
        ]
        this._carBrands = [
            {id: 1, name: 'bmw'},
            {id: 2, name: 'audi'}
        ]
        this._carModels = [
            {id:1, name: 'e60',carBrandsId:1, img:'http://localhost:5000/BMW-e60.png'},
            {id:2, name: 'f10',carBrandsId:1, img:'http://localhost:5000/BMW-e60.png'}
        ]
        this._products = [
            {
                id: 2,
                name: "Audi Performance Chip",
                horsepowerGain: 30,
                torqueGain: 40,
                description: "Performance chip for various Audi models. Improves horsepower and torque.",
                cost: 499.99,
                carModelsId: 1,  // Assuming CarModel has an ID
                TypeOfProductId: 1 // Assuming TypeOfProduct has an ID,
                
              },
              {
                id: 3,
                name: "BMW Cold Air Intake",
                horsepowerGain: 15,
                torqueGain: 20,
                description: "Cold air intake system for select BMW models. Enhances airflow for increased power.",
                cost: 299.99,
                carModelsId: 2,
                TypeOfProductId: 2
              },
              {
                id: 4,
                name: "Mercedes Exhaust System",
                horsepowerGain: 10,
                torqueGain: 15,
                description: "Performance exhaust system for Mercedes-Benz vehicles. Improves exhaust flow and sound.",
                cost: 799.99,
                carModelsId: 2,
                TypeOfProductId: 3
              },
              {
              id: 5,
                name: "Mercedes Exhaust System1",
                horsepowerGain: 10,
                torqueGain: 15,
                description: "Performance exhaust system for Mercedes-Benz vehicles. Improves exhaust flow and sound.",
                cost: 7991.99,
                carModelsId: 2,
                TypeOfProductId: 3
            },
            {
                id: 6,
                  name: "Mercedes Exhaust System1",
                  horsepowerGain: 10,
                  torqueGain: 15,
                  description: "Performance exhaust system for Mercedes-Benz vehicles. Improves exhaust flow and sound.",
                  cost: 7991.99,
                  carModelsId: 2,
                  TypeOfProductId: 3
              },

        ]
        this._selectedBrand = {}
        makeAutoObservable(this);

    }
    setSelectedBrand(carBrands)
    {
        this._selectedBrand = carBrands;
    }

    setTypes(types) {
        this._typesOfTune = types;
    }
    setBrands(carBrands) {
        this._carBrands = carBrands;
    }
    setProducts(products) {
        this._products = products;
    }
    setModels(carModels) {
        this._carModels = carModels;
    }

    get types(){
        return this._typesOfTune
    }
    get carBrands(){
        return this._carBrands
    }
    get carModels(){
        return this._carModels
    }
    get products(){
        return this._products
    }
}