import "../App.css";

import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { fetchProductData } from "../actions/productActons";
import { dataItems } from "../data/json";

function CartMain() {
    const { cartItems, removeFromCart, updateCartItemQuantity, clearCart } = useContext(CartContext);

    // Состояние для хранения общей стоимости
    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    const savedCards = useSelector((state) => state.products.products);
    const products = savedCards !== undefined ? savedCards : [];

    console.log(products);

    // const products = JSON.parse(dataItems);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            const product = products.find((product) => product.id === item.id);
            if(product){
            total += product.price * item.quantity;
            }
        });
        setTotalPrice(total);
    }, [cartItems,products]);

    // Очистка корзины
    const handleClearCart = () => {
        clearCart();
    };


    return (
        <main className="main">
            <div className="top-head center">
                <h2 className="top-head__heading">SHOPPING CART</h2>
            </div>

            <div className="cart center">
                <div className="cart__content">
                    {cartItems.map((item) => {
                        const product = products.find((product) => product.id === item.id);
                        if (product) return <CartItem key={product.id} card={product} quantity={item.quantity} />;
                    })}
                    {/* <div className="cart-item">
                            <img src="./img/image_3.png" alt="good" className="cart-item__photo" />
                            <div className="cart-item__content">
                                <a href="#" className="cart-item__link">
                                    MANGO PEOPLE T-SHIRT
                                </a>
                                <ul className="cart-item__info">
                                    <li className="cart-item__text">
                                        Price: <span className="cart-item__text cart-item__text_select">$300</span>
                                    </li>
                                    <li className="cart-item__text">
                                        Color: <span className="cart-item__text cart-item__text_select">Red</span>
                                    </li>
                                    <li className="cart-item__text">
                                        Size: <span className="cart-item__text cart-item__text_select">Xl</span>
                                    </li>
                                    <li className="cart-item__text cart-item__text_quantity">
                                        Quantity: <input className="cart-item__number" type="number" value="2" />
                                    </li>
                                </ul>
                                <a href="" className="cart-item__close">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                            fill="#575757"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="cart-item">
                            <img src="./img/image_2catalog.png" alt="good" className="cart-item__photo" />
                            <div className="cart-item__content">
                                <a href="#" className="cart-item__link">
                                    MANGO PEOPLE T-SHIRT
                                </a>
                                <ul className="cart-item__info">
                                    <ul className="cart-item__info">
                                        <li className="cart-item__text">
                                            Price: <span className="cart-item__text cart-item__text_select">$300</span>
                                        </li>
                                        <li className="cart-item__text">
                                            Color: <span className="cart-item__text cart-item__text_select">Red</span>
                                        </li>
                                        <li className="cart-item__text">
                                            Size: <span className="cart-item__text cart-item__text_select">Xl</span>
                                        </li>
                                        <li className="cart-item__text cart-item__text_quantity">
                                            Quantity: <input className="cart-item__number" type="number" value="2" />
                                        </li>
                                    </ul>
                                </ul>
                                <a href="" className="cart-item__close">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                            fill="#575757"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div> */}
                    <div className="cart__buttons">
                        <button className="cart__button" onClick={handleClearCart}>
                            <span className="capcase">CLEAR SHOPPING CART</span>
                            <span className="lowercase">Clear shopping cart</span>
                        </button>
                        <button className="cart__button">
                            <a href="/catalog">
                                <span className="capcase">CONTINUE SHOPPING</span>
                                <span className="lowercase">Continue shopping</span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="cart__right-side">
                    <div className="cart__address">
                        <h2 className="cart__heading">SHIPPING ADDRESS</h2>
                        <form action="#" className="cart__form">
                            <input className="state cart__input" type="text" placeholder="Bangladesh" />
                            <input className="cart__input" type="text" placeholder="State" />
                            <input className="cart__input" type="text" placeholder="Postcode / Zip" />
                            <button className="cart__button-adress">
                                <span className="capcase">GET A QUOTE</span>
                                <span className="lowercase">Get a quote</span>
                            </button>
                        </form>
                    </div>
                    <div className="cart__proceed">
                        <h4 className="cart__proceed-subtotal">
                            SUB TOTAL <span>${totalPrice.toFixed(2)}</span>
                        </h4>
                        <h3 className="cart__proceed-total">
                            GRAND TOTAL <span>${totalPrice.toFixed(2)}</span>
                        </h3>
                        <div className="cart__proceed__line"></div>
                        <button className="cart__proceed-button">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CartMain;
