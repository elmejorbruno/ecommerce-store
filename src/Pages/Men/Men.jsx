import React from 'react'
import { ProductsData } from '../../Components/Data/ProductsData'
import ProductCard from '../../Components/Card/ProductCard';

const Men = () => {
  const products = ProductsData.filter(
    product => product.category === category
  );

  return (
    <div>
      <ProductGrid
        category="men"
        title="Colección Masculina"
        subtitle="Camisas, pantalones y prendas con estilo."
      />

      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}/>
      ))}
    </div>
  )
}

export default Men