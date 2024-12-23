import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import HeaderComp from "../../components/HeaderComp/HeaderComp";
import "./ProductPage.css";
import { fetchProduct, fetchBrands, fetchModels } from "../../http/productAPI";
import { Context } from "../../index";
import { getProfile } from '../../http/userAPI';
import axios from 'axios';
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
  const { id } = useParams(); // Получаем ID из URL
  const { product } = useContext(Context); // Подключаем контекст

  const [userData, setUserData] = React.useState({});
  const token = localStorage.getItem('token');

  const fetchUserData = async () => {
    try {
      const data = await getProfile();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);
  const handlePost = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/HistoryOfOrders`,
        { 
          UserId: userData.id, 
          ProductId: currentProduct.id 
        }, // Тело запроса
        {
          headers: {
            Authorization: `Bearer ${token}`, // Заголовок с токеном
          },
        }

      );
      alert(`Поздравляю Вас, ${userData.email} С покупкой агрегата`)
    } catch (e) {
      console.error('Ошибка при добавлении:', e.response ? e.response.data : e.message);
    }
  };

  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(null);
  const [bubu, setBubu] = useState(null);

  useEffect(() => {
    const loadProductData = async () => {
      try {
        // Загружаем текущий продукт
        const fetchedProduct = await fetchProduct(id);
        setCurrentProduct(fetchedProduct);

        // Находим модель и бренд, связанные с продуктом
        const relatedModel = product.carModels.find(
          (model) => model.id === fetchedProduct.CarModelId
        );
        setBubu(relatedModel);

        if (relatedModel) {
          const relatedBrand = product.carBrands.find(
            (brand) => brand.id === relatedModel.CarBrandId
          );
          setCurrentBrand(relatedBrand);
        }
      } catch (error) {
        console.error("Ошибка загрузки данных продукта:", error);
      }
    };

    loadProductData();
  }, [id, product]);

  const handleAddToCart = () => {
    alert("Товар добавлен в корзину!");
  };

  if (!currentProduct || !bubu || !currentBrand) {
    return <div>Loading...</div>; // Отображаем, пока данные загружаются
  }

  return (
    <>
      <HeaderComp />
      <div className="ddfghjk">
        <div className="product-page">
          <div className="product-image">
            <img
              src={process.env.REACT_APP_API_URL + bubu.img}
              alt={bubu.name}
            />
          </div>
          <div className="product-info">
            <h1>{currentBrand.name + ' ' + bubu.name}</h1>
            <p className="price">${currentProduct.cost}</p>

            <div className="product-specs">
              <p><strong>Performance Increase:</strong></p>
              <ul>
                <li>+{currentProduct.horsepowerGain} HorsePower</li>
                <li>+{currentProduct.torqueGain} Torque</li>
              </ul>
            </div>

            <button className="add-to-cart" onClick={handlePost}>
              Buy
            </button>
          </div>
        </div>
        <div className="product-description">
          <h2>Description</h2>
          <p>{currentProduct.description}</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductPage;
