import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { dataItems } from "../data/json";
import ProductsPanel from "./ProductPanel";
import { useEffect } from "react";
import { fetchProductData } from "../actions/productActons";

function ProductsContainerCatalog() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    const savedCards = useSelector((state) => state.products.products);

    return (
        <div className="products container">
            <h2>Fetured Items</h2>
            <h3>Shop for items based on what we featured in this week</h3>
            <ProductsPanel cards={savedCards !== undefined ? savedCards : []} count={9} />
        </div>
    );
}

export default ProductsContainerCatalog;
