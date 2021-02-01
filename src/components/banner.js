import React from "react";
//import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Ik verzorg jouw</span>
            </div>
            <div className="line">
              <span>visuele communicatie</span>
            </div>
          </h2>
          <div className="btn-row">
            <a className="first-link" href="http://www.nitras.be">
              grafisch ontwerp
            </a>
            , <a href="http://">webdesign</a>, <a href="http://">branding...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
