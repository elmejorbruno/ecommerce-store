import React from 'react';
import { ProductsData } from '../Data/ProductsData';
import { FaStar } from 'react-icons/fa6';
import ProductCard from '../Card/ProductCard';

const FeaturedProducts = () => {
	// Mostrar algunos productos destacados en la página principal.
	return (
		<div className="mt-14 mb-12">
			<div className="container">
				{/* Header section */}

				<div className="text-center mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary ">
						Productos más vendidos para ti
					</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Productos destacados
					</h1>
					<p data-aos="fade-up" className="text-xs text-black-400 p-3">
						Explora una selección de prendas elegantes para mujer,
    					hombre y niños. Diseños modernos, materiales de calidad
    					y estilos pensados para cada ocasión.
					</p>
				</div>
				{/* Body section */}
				<div className="">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center  ">
						{/* card srction */}
					{ProductsData.slice(0, 5).map((product) => (
						<ProductCard
						key={product.id}
						{...product}
						aosDelay={product.aosDelay}
						/>
					))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
