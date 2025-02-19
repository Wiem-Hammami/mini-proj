import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../services/CategoriesService'; 

function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      const fetchCategories = async () => {
          const categoryNames = await getCategories();
          setCategories(categoryNames);
      };

      fetchCategories();
  }, []);

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
              {/* {categories.map((category) => (
                <li key={category}>
                  <NavLink 
                    to={`/categories/${category}`} 
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {category}
                  </NavLink>
                </li>
              ))} */}
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
