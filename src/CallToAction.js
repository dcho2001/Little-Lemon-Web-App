import React from "react";
import { Link } from "react-router-dom";
import image1 from "./icons_assets/restauranfood.jpg";

const CallToAction = () => {
    return(
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h3>Chicago, IL</h3>
                <p>Experience authentic Mediterranean flavors right in the heart of Chicago. From our family to yours, we bring you fresh, flavorful dishes that celebrate tradition and taste.</p>
                <Link to="/reservation">
                    <button className="reserve-button" aria-label="Reserve a table at Little Lemon">Reserve a Table</button>
                </Link>
            </div>
            <div>
                <img src={image1} style={{
                    width: 600,
                    height: 680,
                }} alt="delicious food served at Little Lemon"></img>
            </div>
        </section>
    );
};

export default CallToAction;