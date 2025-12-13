import "../App.css";
import FooterProduct from "./footer/FooterProduct";
import Header from "./header/Header";

function Cart() {
    return (
        <div class="box-content">
            <h2 style={{ display: "none" }}>Site about clothes</h2>
            <Header />

            <main class="main">
                <div class="top-head center">
                    <h2 class="top-head__heading">SHOPPING CART</h2>
                </div>

                <div class="cart center">
                    <div class="cart__content">
                        <div class="cart-item">
                            <img src="./img/image_3.png" alt="good" class="cart-item__photo" />
                            <div class="cart-item__content">
                                <a href="#" class="cart-item__link">
                                    MANGO PEOPLE T-SHIRT
                                </a>
                                <ul class="cart-item__info">
                                    <li class="cart-item__text">
                                        Price: <span class="cart-item__text cart-item__text_select">$300</span>
                                    </li>
                                    <li class="cart-item__text">
                                        Color: <span class="cart-item__text cart-item__text_select">Red</span>
                                    </li>
                                    <li class="cart-item__text">
                                        Size: <span class="cart-item__text cart-item__text_select">Xl</span>
                                    </li>
                                    <li class="cart-item__text cart-item__text_quantity">
                                        Quantity: <input class="cart-item__number" type="number" value="2" />
                                    </li>
                                </ul>
                                <a href="" class="cart-item__close">
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

                        <div class="cart-item">
                            <img src="./img/image_2catalog.png" alt="good" class="cart-item__photo" />
                            <div class="cart-item__content">
                                <a href="#" class="cart-item__link">
                                    MANGO PEOPLE T-SHIRT
                                </a>
                                <ul class="cart-item__info">
                                    <ul class="cart-item__info">
                                        <li class="cart-item__text">
                                            Price: <span class="cart-item__text cart-item__text_select">$300</span>
                                        </li>
                                        <li class="cart-item__text">
                                            Color: <span class="cart-item__text cart-item__text_select">Red</span>
                                        </li>
                                        <li class="cart-item__text">
                                            Size: <span class="cart-item__text cart-item__text_select">Xl</span>
                                        </li>
                                        <li class="cart-item__text cart-item__text_quantity">
                                            Quantity: <input class="cart-item__number" type="number" value="2" />
                                        </li>
                                    </ul>
                                </ul>
                                <a href="" class="cart-item__close">
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
                        <div class="cart__buttons">
                            <button class="cart__button">
                                <span class="capcase">CLEAR SHOPPING CART</span>
                                <span class="lowercase">Clear shopping cart</span>
                            </button>
                            <button class="cart__button">
                                <span class="capcase">CONTINUE SHOPPING</span>
                                <span class="lowercase">Continue shopping</span>
                            </button>
                        </div>
                    </div>
                    <div class="cart__right-side">
                        <div class="cart__address">
                            <h2 class="cart__heading">SHIPPING ADDRESS</h2>
                            <form action="#" class="cart__form">
                                <input class="state cart__input" type="text" placeholder="Bangladesh" />
                                <input class="cart__input" type="text" placeholder="State" />
                                <input class="cart__input" type="text" placeholder="Postcode / Zip" />
                                <button class="cart__button-adress">
                                    <span class="capcase">GET A QUOTE</span>
                                    <span class="lowercase">Get a quote</span>
                                </button>
                            </form>
                        </div>
                        <div class="cart__proceed">
                            <h4 class="cart__proceed-subtotal">
                                SUB TOTAL <span>$900</span>
                            </h4>
                            <h3 class="cart__proceed-total">
                                GRAND TOTAL <span>$900</span>
                            </h3>
                            <div class="cart__proceed__line"></div>
                            <button class="cart__proceed-button">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </main>
            <FooterProduct />
        </div>
    );
}

export default Cart;
