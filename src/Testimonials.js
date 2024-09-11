import React from "react";
import image5 from "./icons_assets/reviewer.jpg";

const Testimonials = () => {
    return(
        <section className="testimonials">
            <div className="testimonials-title">
                <h3>Testimonials</h3>
                <p>Gander at what our loyal little lemons have to say!</p>
            </div>
            <div className="testimonial-scroll-box">
                <div class="scroll-indicator left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5-5 5-5v10z"/></svg>
                </div>
                <div className="testimonials-card-layout">
                    <div className="reviewer">
                        <img src={image5} alt="profile-pic1"></img>
                        <h4>Richard 1</h4>
                        <p>"This tastes great! I love the spaghetti! Good job chef!"</p>
                    </div>
                    <div className="reviewer">
                        <img src={image5} alt="profile-pic2"></img>
                        <h4>Richard 2</h4>
                        <p>"This tastes great! I love the spaghetti! Good job chef!"</p>
                    </div>
                    <div className="reviewer">
                        <img src={image5} alt="profile-pic3"></img>
                        <h4>Richard H.</h4>
                        <p>"This tastes great! I love the spaghetti! Good job chef!"</p>
                    </div>
                    <div className="reviewer">
                        <img src={image5} alt="profile-pic4"></img>
                        <h4>Richard 3</h4>
                        <p>"This tastes great! I love the spaghetti! Good job chef!"</p>
                    </div>
                    <div className="reviewer">
                        <img src={image5} alt="profile-pic4"></img>
                        <h4>Bob</h4>
                        <p>"...who's Bob?"</p>
                    </div>
                </div>
                <div className="scroll-indicator right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 5l5 5-5 5V5z"/></svg>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;