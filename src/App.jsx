import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product';

function App() {
  return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
