import { NavLink } from 'react-router-dom';

import { useCategories } from '../contexts/CategoryContext.jsx';  

function Menu() {

const categories = useCategories();


  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
             
              {categories.length > 0 ? (
                        categories.map((category) => (
                            <li key={category}>
                                <NavLink 
                    to={`/categories/${category}`} 
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {category}
                  </NavLink>
                            </li>
                        ))
                    ) : (
                        <li>Chargement...</li>
                    )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
