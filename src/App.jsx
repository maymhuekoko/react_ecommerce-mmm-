import Cart from "./pages/Cart";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Pay from "./pages/Pay";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


const App = () => {

  const user = useSelector((state)=>state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:category_id/:category_name" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
      </Routes>
    </Router>
  );
  
};

export default App;
