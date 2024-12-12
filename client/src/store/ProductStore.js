import { makeAutoObservable } from 'mobx';

export default class ProductStore {
    constructor() {
        this._typesOfTune = []
        this._carBrands = []
        this._carModels = []
        this._products = []
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