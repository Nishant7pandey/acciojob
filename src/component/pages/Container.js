import React from "react";
import "./Container.css";
import girl from "./image/none.png";

const Container = () => {
  return (
    <div>
      <div className="container">
        {/* <div className='row'> */}
        <div className="container-left">
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <h4>
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="button-container">
            <button className="button">
              <h3>SHOP NOW</h3>
            </button>
          </div>
        </div>
        <div className="container-right">
          <div className="right">
            <img src={girl} alt="girl" />
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Container;
