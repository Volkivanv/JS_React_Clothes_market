import "../../App.css";
import FooterDelivery from "./FooterDelivery";
import FooterReference from "./FooterReference";
import FooterSubscribe from "./FooterSubscribe";

function Footer() {
    return (
        <footer className="footer">
            <FooterDelivery/>
            <FooterSubscribe/>
            <FooterReference/>
        </footer>
    );
}

export default Footer;
