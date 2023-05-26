import React from "react";
import about from "../asset/aboutpic.jpg";
import "../styles/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
        
      >hi</div>
       
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, to the master roasters who coax the best from every bean, and to the barista who serves it with care. We are committed to the highest standards of quality and service, embracing our heritage while innovating to create new experiences to savor.


      -SAMBHAV DAS(CEO AND CHAIRMAN)

        
        </p>
      </div>
    </div>
  );
}

export default About;