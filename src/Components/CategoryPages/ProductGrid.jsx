import React from "react";
import ProductCard from "../Card/ProductCard";

const ProductGrid = ({ products = [], view = "grid", perPage = 12 }) => {
  const visibleProducts = products.slice(0, perPage);

  return (
    <div className={view === "grid" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" : "flex flex-col gap-6"}>
      {visibleProducts.map((product, index) => (
        <ProductCard key={index} product={product} view={view} />
      ))}
    </div>
  );
};

export default ProductGrid;
