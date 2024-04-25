import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  console.log(id);

  const fetchProductsById = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      console.log(data);
      setData(data);
      setImages(data.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductsById(id);
  }, []);

  return (
    <div
      style={{
        // padding: "0 100px",
        // backgroundColor: "red",
        // maxWidth: "1240px",
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
        {images.map((image) => (
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

          //   right:'0px'
          //   alignItems: "flex-end",
          //   backgroundColor: "green",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "48px",
          }}
        >
          <div>
            <p
              style={{
                opacity: "50%",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "21.78px",
              }}
            >
              {data.brand}
            </p>
            <p
              style={{
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "42px",
                color: "rgba(0,12,34,1)",
              }}
            >
              {data.title}
            </p>
          </div>
          <p
            style={{
              fontWeight: 500,
              fontSize: "64px",
              lineHeight: "42px",
              color: "rgba(0,12,34,1)",
            }}
          >
            {data.price}$
          </p>
          <div>
            <p
              style={{
                opacity: "50%",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "21.78px",
              }}
            >
              Description
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19.36px",
              }}
            >
              {data.description}
            </p>
          </div>
          <div>
            <p
              style={{
                opacity: "50%",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "21.78px",
              }}
            >
              Note
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19.36px",
              }}
            >
              {data.rating}/5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
