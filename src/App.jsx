import './App.css'
import Header  from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        
      </Routes>
      <Home/>
      <Footer />
    </Router>
  );
}

export default App

