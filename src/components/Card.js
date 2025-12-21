import "../App.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.card.imgUrl} alt={props.card.ImgAlt} />
            <div className="Add_to_card">
                <button>
                    <img src="./img/icon_basket.svg" alt="icon_basket" />
                    <span>Add to Cart</span>
                </button>
            </div>
            <div className="card_description">
                <h4>{props.card.title}</h4>
                <p>
                    {props.card.description}
                </p>
                <h5>{props.card.price}</h5>
            </div>
        </div>
    );
}

export default Card;
