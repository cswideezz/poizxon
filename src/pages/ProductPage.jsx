import { useParams } from 'react-router-dom';


import ProductsData from '../data/ProductsData.js'
import Product from '../components/layout/Product/Product.jsx';

const ProductPage = () => {

    const { id } = useParams();
    const product = ProductsData.find((p) => p.id === +id);



    return (
        <>
            {product ? <Product product={product} /> : <p>Product not found</p>}

        </>
    )
}

export default ProductPage