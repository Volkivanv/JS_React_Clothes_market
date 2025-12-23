import { useContext } from "react";
import "../App.css";
import { CartContext } from "../contexts/CartContext";

function Card(props) {

    const{ addToCart } = useContext(CartContext);


    const handleAddToCart = () => {
        addToCart(props.card.id);
    }

    return (
        <div className="card">
            <img src={props.card.imgUrl} alt={props.card.ImgAlt} />
            <div className="Add_to_card" >
                <button onClick={handleAddToCart}>
                    <img src="./img/icon_basket.svg" alt="icon_basket" />
                    <span>Add to Cart</span>
                </button>
            </div>
            <div className="card_description">
                <h4>{props.card.title}</h4>
                <p>
                    {props.card.description}
                </p>
                <h5>{props.card.size}</h5>
                <h5>${props.card.price}</h5>
            </div>
        </div>
    );
}

export default Card;
