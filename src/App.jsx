
import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom"; 

function App() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default App;
