import "../App.css";
import FooterProduct from "./footer/FooterProduct";
import FooterReference from "./footer/FooterReference";
import FooterSubscribe from "./footer/FooterSubscribe";
import Header from "./header/Header";

function Product() {
    return ( 
        <div className="box-content">
            <h2 style={{display: "none"}}>Site about clothes</h2>

            <Header/>

            <main className="main">
                <div className="top-head center">
                    <h2 className="top-head__heading">NEW ARRIVALS</h2>
                    <nav className="breadcrumbs">
                        <div className="breadcrumbs__box"><a href="#"  className="breadcrumbs__link">HOME</a></div>
                        <div className="breadcrumbs__box"><a href="#"  className="breadcrumbs__link">MEN</a></div>
                        <div className="breadcrumbs__box"><a href="#"  className="breadcrumbs__link">NEW ARRIVALS</a></div>
                    </nav>
                </div>

                <div className="product-box">
                    <div className="product-box__narrow left-narrow">
                        <img src="./img/left-narrow.svg" alt="left-narrow" />
                    </div>
                    <div className="product-box__imgbox">
                        <img className="product-box__img" src="img/product1.jpg" alt="product" />
                    </div>
                    <div className="product-box__narrow right-narrow">
                        <img src="./img/right-narrow.svg" alt="right-narrow" />
                    </div>
                </div>

                <div className="product center">
                    <div className="product__content">
                        <h4 className="product__collection">WOMEN COLLECTION</h4>
                        <div className="product__devider"></div>
                        <h3 className="product__name">MOSCHINO CHEAP AND CHIC</h3>
                        <p className="product__text">
                            Compellingly actualize fully researched processes before proactive outsourcing.
                            Progressively syndicate collaborative architectures before cutting-edge services. Completely
                            visualize parallel core competencies rather than exceptional portals.
                        </p>
                        <p className="product__price">$561</p>
                        <div className="product__line"></div>
                        <nav className="product__sort">
                            <a href="#" className="product__link"
                                >CHOOSE COLOR <img src="./img/toggle.svg" alt="toggle" />
                            </a>
                            <a href="#" className="product__link"
                                >CHOOSE SIZE <img src="./img/toggle.svg" alt="toggle"
                            /></a>
                            <a href="#" className="product__link">QUANTITY<img src="./img/toggle.svg" alt="toggle" /></a>
                        </nav>

                        <button className="product__button">
                            <img src="./img/icon_basket.svg" alt="icon_basket" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>

                <div className="products container">
                    <div className="product_panel">
                        <div className="card">
                            <img src="./img/image_4.png" alt="image_4" />
                            <div className="Add_to_card">
                                <button>
                                    <img src="./img/icon_basket.svg" alt="icon_basket" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                            <div className="card_description">
                                <h4>ELLERY X M'O CAPSULE</h4>
                                <p>
                                    Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.
                                </p>
                                <h5>$52.00</h5>
                            </div>
                        </div>
                        <div className="card mobile-invisible">
                            <img src="./img/Image_3.png" alt="Image_5" />
                            <div className="Add_to_card">
                                <button>
                                    <img src="./img/icon_basket.svg" alt="icon_basket" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                            <div className="card_description">
                                <h4>ELLERY X M'O CAPSULE</h4>
                                <p>
                                    Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.
                                </p>
                                <h5>$52.00</h5>
                            </div>
                        </div>
                        <div className="card tablet-invisible">
                            <img src="./img/Image_6.png" alt="Image_6" />
                            <div className="Add_to_card">
                                <button>
                                    <img src="./img/icon_basket.svg" alt="icon_basket" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                            <div className="card_description">
                                <h4>ELLERY X M'O CAPSULE</h4>
                                <p>
                                    Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.
                                </p>
                                <h5>$52.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterProduct/>
        </div>
     );
}

export default Product;
