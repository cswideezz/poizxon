import { Link } from 'react-router-dom'
import ProductsData from '../../../data/ProductsData'
import s from './Catalog.module.scss'

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <div className="container">
        <h2 className="section-title">Каталог</h2>

        <div className={s.wrap}>

          {ProductsData.map((item) => (
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
      </div>
    </section>
  )
}

export default Catalog