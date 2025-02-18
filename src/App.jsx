

import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CategoryProducts from './pages/CategoryProducts.jsx'; 

function App() {
  return (
    <Router>
      <Header />
      <Menu /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryName" element={<CategoryProducts />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
