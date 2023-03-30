import React from "react";
import "../style/card.css";
import "../style/App.css";

export default function Card({ isDarkTheme, image, title, description }) {
  return (
    <div className="cardBody">
      <img className="cardImage" src={image} alt={title} />
      <div
        style={{
          width: "180px",
          height: "62px",
          textAlign: "initial",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}>
        <p
          className={
            isDarkTheme ? "body2 textPrimaryWhite" : "body2 textPrimaryBlack"
          }>
          {title.length > 15 ? title.substring(0, 15) + "..." : title}
        </p>
        <p
          className={
            isDarkTheme
              ? "caption1 textPrimaryWhite"
              : "caption1 textPrimaryBlack"
          }>
          {description}
        </p>
      </div>
    </div>
  );
}
