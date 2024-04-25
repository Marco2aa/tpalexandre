import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Sidebar from "../Components/Sidebar/Sidebar";
import image from "../assets/images/image.png";
import Card from "../Components/Card/Card";
import { GetProductByCategory, GetProducts } from "../Config/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleProductsByCategory = async (category) => {
    if (!category) {
      fetchProducts();
      return;
    }

    try {
      const response = await axios.get(GetProductByCategory(category));
      const data = response.data;
      console.log(data);
      console.log(category);
      setData(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get(GetProducts());
      const data = response.data;
      console.log("PRODUITS", data);
      setData(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div
        style={{
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            height: "112px",
          }}
        >
          <p
            style={{
              width: "245px",
              height: "64px",
              fontWeight: 500,
              fontSize: "56px",
              lineHeight: "64px",
              fontFamily: "Poppins",
            }}
          >
            PRODUCTS
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "48px" }}>
          <Sidebar onClick={handleProductsByCategory} />
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(3,1fr)",
            }}
          >
            {data.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/details/${item.id}`)}
                brand={item.brand}
                name={item.title}
                price={item.price}
                image={item.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
