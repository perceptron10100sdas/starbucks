
import React from "react";
import { Link } from "react-router-dom";
import Background from '../asset/pagebackground.webp';
import "../styles/home.css";

function Home() {
  return (
    <div className="home"
    style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="headerContainer">
        <h1> Starbucks </h1>
        <p> You’re a sip away from GOLD</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>

      </div>
    </div>
    
  )
}

export default Home