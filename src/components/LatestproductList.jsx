import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products.js'

const LatestproductList = () => {
  return (
    <div className='row'>
        {products.slice(7,11).map((product,index) =>(
          <div key={index} className="col-md-3">
<ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}
          starImage={product.starImage}
          bestseller={product.bestseller}
/>
          </div>  
        ))}
    </div>
  )
}

export default LatestproductList