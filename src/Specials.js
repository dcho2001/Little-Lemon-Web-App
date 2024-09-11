import React from "react";
import image2 from "./icons_assets/greek salad.jpg";
import image3 from "./icons_assets/bruchetta.svg";
import image4 from "./icons_assets/lemon dessert.jpg";

const Specials = () => {
    return(
    <section className="specials">
        <div className="specials-title">
            <h3>This Month's Specials</h3>
        </div>
        <div className="specials-title-text">
            <p>Discover our chef’s handpicked specials, featuring the freshest ingredients and seasonal flavors. Whether you're craving something light or hearty, our specials offer something for everyone.</p>
            <p>Available only for a limited time!</p>
        </div>
        <div className="specials-cards-layout">
            <div className="specials-cards">
                <img src={image2} alt="Greek Salad"></img>
                <h4>Greek Salad</h4>
                <p>A refreshing mix of crisp cucumbers, juicy tomatoes, kalamata olives, and feta cheese, all tossed in a light lemon vinaigrette.</p>
                <h6>$6.99</h6>
                <div className="delivery-button-position">
                    <button className="delivery-button" aria-label="Order Greek Salad To-Go">Order To-Go</button>
                </div>
            </div>
            <div className="specials-cards">
                <img src={image3} alt="Bruschetta"></img>
                <h4>Bruschetta</h4>
                <p>Grilled bread topped with a blend of ripe tomatoes, fresh basil, and a drizzle of olive oil, finished with a hint of garlic.</p>
                <h6>$6.99</h6>
                <div className="delivery-button-position">
                    <button className="delivery-button" aria-label="Order Bruschetta To-Go">Order To-Go</button>
                </div>
            </div>
            <div className="specials-cards">
                <img src={image4} alt="Lemon Dessert"></img>
                <h4>Lemon Dessert</h4>
                <p>A zesty, tangy lemon dessert that’s the perfect ending to any meal. Light, refreshing, and bursting with flavor.</p>
                <h6>$6.99</h6>
                <div className="delivery-button-position">
                    <button className="delivery-button" aria-label="Order Lemon Dessert To-Go">Order To-Go</button>
                </div>
            </div>
        </div>
        <div className="specials-menu-button">
            <button className="online-menu-button" aria-label="View Full Menu">Full Menu</button>
        </div>
    </section>
    );
};

export default Specials;