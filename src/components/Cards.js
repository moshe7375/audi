import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div>
        <img src={require("../cars/sports.jpg")} alt="" />
        <p className="red">Audi Sports</p>
      </div>
      <div>
        <img src={require("../cars/electric.jpg")} alt="" />
        <p>Electric Models</p>
      </div>
      <div>
        <img src={require("../cars/preOwned.jpg")} alt="" />
        <p>Audi Certified pre-owned</p>
      </div>
      <div>
        <img src={require("../cars/parts.jpg")} alt="" />
        <p>Audi Genuine Parts</p>
      </div>
    </div>
  );
};

export default Cards;
