import "bootstrap/dist/css/bootstrap.css";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Error from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {["/", "products"].map((path, index) => (
            <Route path={path} element={<Products />} key={index} />
          ))}
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
