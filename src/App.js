import Shop from './pages/shop';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Products from './pages/products';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/products" element={<Products />} /> {/* Product listing page */}
          <Route path="/products/:productId" element={<ProductDetails />} />{/* Product details page */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
