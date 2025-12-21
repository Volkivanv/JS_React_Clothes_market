import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { dataItems } from "../data/json";
import ProductsPanel from "./ProductPanel";
import { useContext, useEffect } from "react";
import { fetchProductData } from "../actions/productActons";
import withFilter from "../hoc/withFilter";
import { FilterContext } from "../contexts/FilterContext";

function ProductsContainerCatalog() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    const savedCards = useSelector((state) => state.products.products);

  

   const { filter } = useContext(FilterContext);

   console.log(filter);

   const filter0 = filter !== undefined ? filter : ["XS", "S", "M", "L"];

    const cards = withFilter(savedCards, filter0);

//   const cards = savedCards;

    return (
        <div className="products container">
            <h2>Fetured Items</h2>
            <h3>Shop for items based on what we featured in this week</h3>
            <ProductsPanel cards={cards !== undefined ? cards : []} count={9} />
        </div>
    );
}

export default ProductsContainerCatalog;
