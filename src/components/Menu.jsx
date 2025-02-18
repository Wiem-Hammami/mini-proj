
import { Link } from 'react-router-dom';

function Menu() {
  const categories = ["Samsung", "Apple", "LG", "Sony", "Huawei"]; 

  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link to={`/categories/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
