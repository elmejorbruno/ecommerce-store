import React from 'react';
import ProductCard from '../Card/ProductCard';


const ProductGrid = ({ products = [], view = 'grid', perPage = 12, columns = 'catalog', }) => {
	// Productos que se mostrarán
	const visibleProducts = products.slice(0, perPage);
    console.log('ProductGrid recibió:', products);
console.log('Cantidad ProductGrid:', visibleProducts.length);
console.log('Configuración columns:', columns);
	const gridColumns = {
		collection: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3  ',
		// collection: 'grid-cols-1 sm:grid-cols-2',
		catalog: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}
	//Productos que se mostrarán
	if (visibleProducts.length === 0) {
		return (
			<div className="py-16 text-center  bg-fondo/40">
				<p className="text-gray-500 dark:text-gray-400  text-lg  bg-fondo/40">No hay productos disponibles en esta colección.</p>
			</div>
		);
	}

	return (
		<section aria-label="Lista de productos" className="w-full min-w-0">
			<div
				className={
					view === 'grid'
						? `grid ${gridColumns[columns]} gap-5`
						: 'flex flex-col gap-8'
				}
			>
				{visibleProducts.map((product) => (
					<ProductCard 
            key={product.id}
            id={product.id}
            image={product.variants?.[0]?.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            variants={product.variants}
            stock={product.stock}
            badge={product.badge}
            aosDelay={product.aosDelay}
           
           />
				))}
			</div>
		</section>
	);
};

export default ProductGrid;
