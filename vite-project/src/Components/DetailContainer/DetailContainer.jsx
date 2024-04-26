import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Info from "../Info/Info";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const DetailContainer = () => {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const navigate = useNavigate();

  const fetchProductsById = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      setDataProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductSameCategory = async (category, limit) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}?limit=${limit}`
      );
      const data = response.data;
      setDataCategory(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductsById(id);
    console.log(id);
  }, [id]);

  useEffect(() => {
    if (dataProduct.category) {
      fetchProductSameCategory(dataProduct.category, 3);
    }
  }, [dataProduct.category]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "150px",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          {dataProduct.images?.map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            width: "100%",
            fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "48px",
            }}
          >
            <Info info={dataProduct} />
          </div>
        </div>
      </div>
      <Categories
        onClick={() => navigate(`/category/${dataProduct.category}`)}
        title={dataProduct.category}
      >
        {dataCategory.products?.map((item) => (
          <Card
            key={item.id}
            product={item}
            onClick={() => navigate(`/details/${item.id}`)}
          />
        ))}
      </Categories>
    </div>
  );
};

export default DetailContainer;
