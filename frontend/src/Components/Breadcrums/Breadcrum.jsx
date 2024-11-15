import React from "react";
import "./Breadcrum.css";
import arrow_iocn from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_iocn} alt="" /> SHOP <img src={arrow_iocn} alt="" />
      {product.category} <img src={arrow_iocn} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
