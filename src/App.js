import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {['/', 'products'].map((path, index) => (
            <Route path={path} element={<Products />} key={index} />
          ))}
          <Route path="/:id" element={<SingleProduct />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
