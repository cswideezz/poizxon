import s from './Catalog.module.scss';
import { Link } from 'react-router-dom';
import ProductsData from '../../../data/ProductsData';

const CategoryList = ({ categoryName, title }) => {

  const filteredProducts = ProductsData.filter(item => item.category.name === categoryName);


  console.log(ProductsData);

  
  return (
    <section className={s.catalog_list}>
      <div className="container">
        <h2 className="section-title">{title}</h2>

        {filteredProducts.length > 0 ? (
          <div className={s.wrap}>
            {filteredProducts.map((item) => (
              <div key={item.id} className={s.card}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.imageUrl} alt={item.name} />
                </Link>
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <h4>{item.price} <span>{item.currency}</span></h4>
              </div>
            ))}
          </div>
        ) : (
          <p>Нет товаров в данной категории.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryList;
