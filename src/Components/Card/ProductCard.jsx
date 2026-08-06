import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProductCard = ({
	id,
	image,
	title,
	price,
	oldPrice,
	rating,
	variants = [],
	stock,
	badge,
	aosDelay,
}) => {
	// Ojo la data que se usa en estas card son para
	// para cada coleccion dataCollectionWomen, dataCollectionMen, dataCollectionKids y
	// y para cada producto o prenda dataProductWomen, dataProductMen, dataProductKids

	//Imagen que se esta mostrando actualmente
	const [selectedVariant, setSelectedVariant] = useState(variants[0] || null);

	// Si existe una variante usamos su imagen.
	// Si no existe, utilizamos image como respaldo.
	const currentImage = selectedVariant?.image || image;

	return (
		<article
			className="group w-full min-w-0
         bg-whit dark:bg-slate-900 rounded-3xl
        overflow-hidden shadow-md hover:shadow-2xl duration-300
        border border-gray-100 dark:border-slate-800"
		>
			{/* Imagen */}

			<div
				data-aos="fade-up"
				data-aos-delay={aosDelay}
				data-aos-duration="800"
				className="  relative
                    aspect-[3/4]
                    overflow-hidden
                    bg-gray-100
                    dark:bg-slate-800
                    object-cover"
			>
				{badge && (
					<span
						className="absolute
                        top-4 left-4 z-20 bg-blue text-white
                        text-xs font-semibold  px-2 py-1 rounded-full
                        shadow"
					>
						{badge}
					</span>
				)}

				<img
					src={currentImage}
					alt={title}
					className="
                    w-full
        h-full
        object-cover
        object-center
        group-hover:scale-105
        duration-500"
				/>
			</div>

			{/* Información */}
			<div className="w-full p-2 ">
				<div className="justify-items-center ">
					<h2
						className="
                text-xl
                text-base 
                sm:text-lg
                font-bold
               text-gray-900
                dark:text-white
                line-clamp-1"
					>
						{title}
					</h2>
				</div>

				{/* Rating */}
				<div className="flex items-center gap-2 mt-2">
					<FaStar className="text-yellow-400" />

					<span className="text-gray-600 dark:text-gray-300">{rating}</span>
				</div>

				{/* Precio */}
				<div className="flex flex-wrap items-center gap-x-3 gap-y-14 ">
					<span
						className="
            text-2xl
            font-bold
            text-button dark:text-gray-300"
					>
						${price}
					</span>

					{oldPrice && (
						<span
							className="
            line-through
            text-gray-400"
						>
							${oldPrice}
						</span>
					)}
				</div>

				{/* Variantes */}
				{variants.length > 0 && (
					<div className="flex items-center gap-3 mt-5">
						{variants.map((variant) => (
							<button
								key={variant.color}
								type="button"
								aria-label={`Ver ${title} en color ${variant.color}`}
								title={variant.color}
								onMouseEnter={() => setSelectedVariant(variant)}
								onMouseLeave={() => setSelectedVariant(variants[0])}
								className="w-7 h-7 rounded-full border-1 border-gray-500 dark:border-slate-700
                                    shadow cursor-pointer transition-transform duration-300 hover:scale-110 
                                    focus:ring-black dark:focus:ring-white"
								style={{
									backgroundColor: variant.code,
								}}
							/>
						))}
					</div>
				)}
			</div>
			{/* Stock */}
			<p
				className="
            mt-5
            text-sm
            text-gray-500 dark:text-gray-400"
			>
				{stock > 0 ? `Disponible (${stock})` : 'Agotado'}
			</p>
			{/* Detalle */}
			<Link
				to={`/product/${id}`}
				className="
            mt-6
            inline-flex
            justify-center
            items-center
            w-full
            rounded-xl
            py-2
            font-semibold
            duration-300
            bg-gray-900
            text-white
            hover:bg-gray-700
            dark:bg-white
            dark:text-slate-900
            dark:hover:bg-gray-200"
			>
				Ver producto
			</Link>
		</article>
	);
};

export default ProductCard;
