import "../App.css";
import MainBegin from "./MainBegin";
import OfferContainer from "./OfferContainer";
import ProductsContainer from "./ProductsContainerIndex";

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
