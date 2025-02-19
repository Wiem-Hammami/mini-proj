import { NavLink } from "react-router-dom";
function FileAriane({categoryName , product}){
    return (
        <div className="product-breadcroumb">
        <NavLink to="/">
                  Home
                </NavLink>
        <NavLink to={`/categories/${categoryName}`}>{categoryName}</NavLink>
        <NavLink to={`/categories/${categoryName}/ProductDetails/${product.id}`}>{product.name}</NavLink>
      </div>
    )
}
export default FileAriane; 