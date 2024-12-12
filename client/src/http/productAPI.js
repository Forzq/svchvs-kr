import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/TypeOfProducts', type);
    return data;
}
export const fetchTypes = async () => {
    const { data } = await $host.get('api/TypeOfProducts');
    return data; 
}

export const createModel = async (model) => {
    const { data } = await $authHost.post('api/CarModels', model);
    return data;
}
export const fetchModels = async () => {
    try {
    const { data } = await $host.get('api/CarModels');
    console.log("Ответ от сервера (fetchModels):", data);
    return data;
     } catch (error) {
    console.error("Ошибка в fetchModels:", error);
    throw error;}
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/CarBrands', brand);
   
    return data;
}
export const fetchBrands = async () => {
    const { data } = await $host.get('api/CarBrands');
    console.log("Ответ от сервера (fetchBrands):", data);
    return data; 
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/Products', product);
    return data;
}
export const fetchProducts = async () => {
    const { data } = await $host.get('api/Products');
    console.log("Ответ от сервера (fetchPr):", data);
    return data; 
}
export const fetchProduct = async (id) => {
    const { data } = await $host.get('api/Products' + id);
    console.log("Ответ от сервера (fetchOnePr):", data);
    return data; 
}