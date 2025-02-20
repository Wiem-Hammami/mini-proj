import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCategories } from '../services/CategoriesService';

const CategoryContext = createContext();

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoryNames = await getCategories();
            setCategories(categoryNames);
        };

        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={categories}>
            {children}
        </CategoryContext.Provider>
    );
};
