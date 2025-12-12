import "../App.css";
import MainBegin from "./MainBegin";
import OfferContainer from "./OfferContainer";
import ProductsContainer from "./ProductsContainer";

function IndexMain() {
    return (
        <main className="main">
            <MainBegin/>
            <OfferContainer/>
            <ProductsContainer/>
        </main>
    );
}

export default IndexMain;
