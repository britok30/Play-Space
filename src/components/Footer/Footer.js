import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row f-row">
        <div className="col-md-12 col">
          <p>Made by Kelvin Brito</p>
          <p>
            Video Game data from RAWG API
            <a href="https://rawg.io/apidocs">-Website: RAWG</a>
          </p>
          <p>
            Not intended for commercial use. Made this for fun as a side project
            using React
          </p>
          <p>Copyright- 2019 - All Video Game information obtained from RAWG</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
