import "../App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import IndexMain from "./IndexMain";

function IndexPage() {
    return (
        <div className="box-content">
            <h2 style={{ display: "none" }}>Site about clothes</h2>
            <Header />
            <IndexMain />
            <Footer />
        </div>
    );
}

export default IndexPage;
