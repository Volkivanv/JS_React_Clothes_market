import "../../App.css";
import FooterReference from "./FooterReference";
import FooterSubscribe from "./FooterSubscribe";

function FooterProduct() {
    return (
        <footer className="footer">
            <FooterSubscribe/>
            <FooterReference/>
        </footer>
    );
}

export default FooterProduct;