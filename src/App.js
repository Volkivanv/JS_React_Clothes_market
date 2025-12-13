import "./App.css";
import Catalog from "./components/Catalog";
import IndexPage from "./components/IndexPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Registration from "./components/Registration";

function App() {
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
