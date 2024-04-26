import React from "react";
import "./Info.css";

const Info = ({ info }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <p
          style={{
            opacity: "50%",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21.78px",
          }}
        >
          {info.brand}
        </p>
        <p
          style={{
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "42px",
            color: "rgba(0,12,34,1)",
          }}
        >
          {info.title}
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
        {info.price}$
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
          {info.description}
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
          {info.rating}/5
        </p>
      </div>
    </div>
  );
};

export default Info;
