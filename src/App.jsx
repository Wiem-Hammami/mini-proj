
import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import { Provider } from "react-redux";
import store from "./store/store.js"; 
import { CategoryProvider } from './contexts/CategoryContext.jsx';
import { Outlet, useLocation } from "react-router-dom"; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  const location = useLocation();

  const isCheckoutOrCart = location.pathname === "/checkout" || location.pathname === "/cart";

  return (
    <Provider store={store}> 
      <CategoryProvider>
        <Header />
        {!isCheckoutOrCart && <Menu />}
        
        <main>
          <Outlet /> 
        </main>
        
        <Footer />
      </CategoryProvider>
    </Provider>
  );
}

export default App;
