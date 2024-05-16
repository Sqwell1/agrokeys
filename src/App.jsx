import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import MenuBlock from './components/MenuBlock.tsx';
import Router from './components/Router.tsx'; // Кастомный компонент для отображения "хлебных крошек"
import About from './pages/About/About.tsx';
import Products from './pages/Products/Products.tsx';
import Contacts from './pages/Contacts/Contacts.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Blog from './pages/Blog/Blog.tsx';
import Home from './pages/Home/Home.tsx';
import Cabinet from './pages/Cabinet/Cabinet.tsx';
import MainPage from './components/MainPage/MainPage.tsx';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <MenuBlock />
        <div className="w-full">
          <Router />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
            <Route path="/page/:pageNumber" element={<MainPage />} />
            <Route path="/cabinet" element={<Cabinet />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
