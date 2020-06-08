import React, { useState, createRef } from "react";
import "./ServiceCard.css";
import ColorThief from "colorthief";

export default function ServiceCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
  };

  return (
    <div className="service-card">
      <div style={{background: rgb(colorArrays) }} className="service-banner">
        <div className="service-blurred_div"></div>
        <div className="service-div-company">
        </div>
        
        <img crossOrigin={"anonymous"} ref={imgRef} className="service-roundedimg" src={cardInfo.logo} alt={cardInfo.title} onLoad={() => getColorArrays()}/>
      </div>
      <div className="service-text-details">
        <h5 className="service-text-role">{cardInfo.title}</h5>
        <p className="subTitle service-text-desc">{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
