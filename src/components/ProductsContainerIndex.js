import { useCallback, useEffect, useState } from "react";
import { fetchProductData } from "../actions/productActons";
import "../App.css";
import ProductsPanel from "./ProductPanel";
import { useDispatch, useSelector } from "react-redux";

function ProductsContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    const savedCards = useSelector((state) => state.products.products);

    return (
        <div className="products container">
            <h2>Fetured Items</h2>
            <h3>Shop for items based on what we featured in this week</h3>
            <ProductsPanel cards={savedCards !== undefined ? savedCards : []} count={6} />
            <button className="Browse">Browse All Product</button>
        </div>
    );
}

export default ProductsContainer;
