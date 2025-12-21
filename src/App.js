import "./App.css";
import Catalog from "./components/Catalog";
import IndexPage from "./components/IndexPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Registration from "./components/Registration";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./actions/productActons";
import { useEffect } from "react";

function App() {
    // const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const handleDispatch = () => {
    //     dispatch(fetchProductData()); // thunk
    // // }


    // useEffect(()=>{
    //     dispatch(fetchProductData());
    // },[dispatch])

    return (
        
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
