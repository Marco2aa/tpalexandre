import React, { useEffect, useState } from "react";
import "./DetailCategory.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const DetailCategory = () => {
  const params = useParams();
  console.log(params.id);
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  const fetchDatas = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${params.id}`
      );
      const data = response.data;
      console.log(data);
      setDatas(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <div className="detail-container">
      <p
        style={{
          fontWeight: 500,
          fontFamily: "Poppins",
          fontSize: "56px",
          lineHeight: "64px",
          textTransform: "uppercase",
        }}
      >
        {params.id}
      </p>
      <div className="grid-container">
        {datas.map((data, index) => (
          <Card
            key={data.id}
            onClick={() => navigate(`/details/${data.id}`)}
            brand={data.brand}
            title={data.title}
            price={data.price}
            image={data.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailCategory;
