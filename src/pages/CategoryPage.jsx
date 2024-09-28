import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../components/layout/Catalog/CategoryList';

const CategoryPage = () => {
  const { category } = useParams();

  const titles = {
    Shirts: "Футболки",
    Shoes: "Обувь",
    Accessories: "Аксессуары",
    Outerwear: "Верхняя одежда",
    Pants: "Брюки",
    Bags: "Сумки"
  };

  return <CategoryList categoryName={category} title={titles[category] || "Категория"} />;
};

export default CategoryPage;
