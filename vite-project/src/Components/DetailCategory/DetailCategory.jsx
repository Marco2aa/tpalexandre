import React, { useEffect, useState } from "react";
import "./DetailCategory.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const DetailCategory = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProductByCategory = async (category) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = response.data;
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductByCategory(params.slug);
  }, []);

  const slugUpperCase = params.slug.toUpperCase();

  return (
    <div className="detail-container">
      <p className="detail-container-text">{slugUpperCase}</p>
      <div className="grid-container">
        {products.map((data) => (
          <Card
            key={data.id}
            onClick={() => navigate(`/details/${data.id}`)}
            product={data}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailCategory;
