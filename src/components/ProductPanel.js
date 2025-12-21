import "../App.css";
import { shuffle } from "../utils/shuffle";
import Card from "./Card";

function ProductsPanel(props) {
    const showingCards = shuffle(props.cards).slice(0, props.count);
   // const showingCards = props.cards;
    return (
        <div className="product_panel">
            {showingCards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
}

export default ProductsPanel;
