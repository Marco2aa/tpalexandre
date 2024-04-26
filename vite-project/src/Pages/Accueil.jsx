import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import HeroSection from "../Components/HeroSection/HeroSection";
import CategorySection from "../Components/CategorySection/CategorySection";
import Categories from "../Components/Categories/Categories";
import Card from "../Components/Card/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
  const smartphone = "smartphones";
  const watches = "mens-watches";
  const [dataWatches, setDataWatches] = useState([]);
  const [dataSmartphones, setDataSmartphones] = useState([]);
  const navigate = useNavigate();

  const FetchDataWatches = async (category, limit) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}/?limit=${limit}`
      );
      const data = response.data;
      setDataWatches(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  const FetchDataSmartphones = async (category, limit) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}/?limit=${limit}`
      );
      const data = response.data;
      console.log(dataSmartphones);
      setDataSmartphones(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchDataWatches(watches, 3);
    FetchDataSmartphones(smartphone, 3);
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        <HeroSection />
        <CategorySection>
          <Categories
            onClick={() => navigate(`/category/${watches}`)}
            title="MEN'S WATCHES"
          >
            {dataWatches.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/details/${item.id}`)}
                product={item}
              />
            ))}
          </Categories>
          <Categories
            onClick={() => navigate(`/category/${smartphone}`)}
            title="SMARTPHONES"
          >
            {dataSmartphones.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/details/${item.id}`)}
                product={item}
              />
            ))}
          </Categories>
        </CategorySection>
      </div>
    </Layout>
  );
};

export default Accueil;
