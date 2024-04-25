import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import HeroSection from "../Components/HeroSection/HeroSection";
import CategorySection from "../Components/CategorySection/CategorySection";
import Categories from "../Components/Categories/Categories";
import Card from "../Components/Card/Card";
import axios from "axios";
import { GetProductByCategorie } from "../Config/Api";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
  const smartphone = "smartphones";
  const watches = "mens-watches";
  const [datas, setDatas] = useState([]);
  const [dataSmartphones, setDataSmartphones] = useState([]);
  const navigate = useNavigate();

  const FetchDataWatches = async () => {
    try {
      const response = await axios.get(GetProductByCategorie(watches, 3));
      const data = response.data;
      // console.log(data);
      setDatas(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  const FetchDataSmartphones = async () => {
    try {
      const response = await axios.get(GetProductByCategorie(smartphone, 3));
      const data = response.data;
      console.log(dataSmartphones);
      setDataSmartphones(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchDataWatches();
    FetchDataSmartphones();
  }, []);

  console.log(datas);

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
            typo="MEN'S WATCHES"
          >
            {datas.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/details/${item.id}`)}
                brand={item.brand}
                name={item.title}
                price={item.price}
                image={item.thumbnail}
              />
            ))}
          </Categories>
          <Categories
            onClick={() => navigate(`/category/${smartphone}`)}
            typo="SMARTPHONES"
          >
            {dataSmartphones.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/details/${item.id}`)}
                brand={item.brand}
                name={item.title}
                price={item.price}
                image={item.thumbnail}
              />
            ))}
          </Categories>
        </CategorySection>
      </div>
    </Layout>
  );
};

export default Accueil;
