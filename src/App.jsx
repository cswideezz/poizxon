import './Reset.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './ScrollToTop';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
