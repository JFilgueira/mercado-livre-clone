import React, { useContext, useEffect} from 'react'
import './ProductList.css'
import fetchProducts from 'api/fetchProducts';
import ProductCard from 'components/ProductCard';
import Loading from 'components/Loading';
import { ProductsContext } from 'context/ProductsContext';

const ProductList = () => {
  const { products, setProducts, loading, setLoading } = useContext(ProductsContext);

  useEffect(() => {
    setLoading(true);
    fetchProducts('computador').then(res => {
      setProducts(res.results)
      setLoading(false);
    })
  }, [setProducts, setLoading]);

  return (
    <section className='product-list container'>
      <h2>Nossos produtos</h2>
      {(loading && <Loading />) ||
        <div className='product-list__container'>
          {products.map(product => <ProductCard data={product} key={product.id} />)}
        </div>
      }
    </section>
  )
}

export default ProductList