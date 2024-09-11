import React from "react";
import image1 from "./icons_assets/onba37nvnvhtceuldxsl.jpg";

const AboutUsPage = () => {
    return(
        <section className="about-us-story">
            <h1>About Us</h1>
            <h3>The Story of Little Lemon</h3>
            <br></br>
            <p>Little Lemon’s story began with a simple idea: to create a place where people could gather to enjoy honest, flavorful food in a warm and welcoming environment. The brothers started small, opening their doors in a cozy space just off Mediterranean Street. Word quickly spread about their mouthwatering dishes, and soon, Little Lemon became a beloved spot for locals and visitors alike.
            <br></br>
            <br></br>
            Over the years, the restaurant has grown, but the commitment to quality and authenticity has never wavered. Each ingredient is carefully selected to ensure it meets the highest standards, from the sun-ripened tomatoes in our bruschetta to the tangy lemons that inspire our signature dessert.
            <br></br>
            <br></br>
            Little Lemon isn’t just about food—it’s about community. It’s a place where people from all walks of life can come together, share a meal, and experience the rich traditions of the Mediterranean, right here in Chicago.</p>
            <br></br>
            <br></br>
            <img src={image1} alt="Chicago"></img>
        </section>
    );
};

export default AboutUsPage;