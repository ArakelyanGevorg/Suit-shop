import React from "react";
import BrownSuit from "../images/BrownSuit.jpg";
import BlueSuit from "../images/BlueSuit.jpg";
import DarkSuit from "../images/DarkSuit.jpg";
import WoolSuit from "../images/WoolSuit.jpg";
import {connect} from 'react-redux';
import {addBasket} from "../actions/addAction";


const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="image">
                <img src={BrownSuit} />
                <h3> Retro Suit in Beige Brown</h3>
                <h3>$1000.00</h3>
                <a onClick={() => props.addBasket('BrownSuit')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={BlueSuit}/>
                <h3> Blue Suit </h3>
                <h3>$1000.00</h3>
                <a onClick={() => props.addBasket('BlueSuit')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={DarkSuit} />
                <h3> Retro Suit in Navy Blue</h3>
                <h3>$1400.00</h3>
                <a onClick={() => props.addBasket('DarkSuit')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={WoolSuit}/>
                <h3> Wool Blend Herringbone </h3>
                <h3>$1800.00</h3>
                <a onClick={() => props.addBasket('WoolSuit')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>

        </div>
    );
}
export default connect(null, {addBasket})(Home);