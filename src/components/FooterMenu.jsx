import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../services/CategoriesService'; 

function FooterMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoryNames = await getCategories();
            setCategories(categoryNames);
        };

        fetchCategories();
    }, []);

    return (
        <div className="col-md-4 col-sm-6">
            <div className="footer-menu">
                <h2 className="footer-wid-title">Categories</h2>
                <ul>
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <li key={category}>
                                <Link to={`/categories/${category}`}>{category}</Link>
                            </li>
                        ))
                    ) : (
                        <li>Chargement...</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default FooterMenu;
