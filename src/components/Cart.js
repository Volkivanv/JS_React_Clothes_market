import "../App.css";
import CartMain from "./CartMain";
import FooterProduct from "./footer/FooterProduct";
import Header from "./header/Header";

function Cart() {
    return (
        <div className="box-content">
            <h2 style={{ display: "none" }}>Site about clothes</h2>
            <Header />
            <CartMain />
            <FooterProduct />
        </div>
    );
}

export default Cart;
