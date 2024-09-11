import React from "react";
import image6 from "./icons_assets/restaurant.jpg";
import image7 from "./icons_assets/Mario and Adrian b.jpg";

const AboutUs = () => {
    return(
        <section className="about">
            <div className="about-text">
                <h3>About Us</h3>
                <h4>Little Lemon</h4>
                <p>Located in the heart of the city, Little Lemon offers a cozy escape from the hustle and bustle of Chicago. Our welcoming atmosphere, combined with the smell of fresh herbs and grilled meats, makes for a dining experience you won’t forget.</p>
                <p>Whether you’re joining us for a casual lunch or a celebratory dinner, Little Lemon is the perfect spot to relax and enjoy delicious Mediterranean food.</p>
                <p><a href="/about-us">Learn More</a></p>
            </div>
            <div className="about-images">
                <img className="about-image-1" src={image6} alt="About"></img>
                <img className="about-image-2" src={image7} alt="About"></img>
            </div>
        </section>
    );
};

export default AboutUs;