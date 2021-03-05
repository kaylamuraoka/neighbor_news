import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListings from "./pages/ProductListings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-listings" component={ProductListings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/messages" component={Messages} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
