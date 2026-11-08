import React, { useEffect, useState } from 'react';
import { ImageList } from '../../Data/SliderData';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
	const [currentSlider, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev === ImageList.length - 1 ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const prevSlide = () => {
		setCurrentSlide((prev) => 
			prev === 0 ? ImageList.length - 1 : prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide((prev) => 
		prev === ImageList.length - 1 ? 0 : prev + 1
	 );
	};
	return (
		<section
			aria-label="Colecciones destacadas"
			className="relative w-full overflow-hidden"
		>
			{ImageList.map((data, index) => (
				<div
					key={data.id}
					className={`${
						index === currentSlider ? 'block' : 'hidden'
					} relative w-full`}
				>
					{/* Imagen */}
					<img
						src={data.img}
						alt=""
						className="h-[560px] w-full object-cover object-center
						sm:h-[600px]
						lg:h-[650px]"
					/>

					{/* Overlay para mejorar legibilidad */}
					<div
						className="absolute inset-0 bg-gradient-to-r
						from-black/55
						via-black/20
						to-transparent"
					/>

					{/* Contenido */}
					<div className="absolute inset-0">
						<div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
							<div
								className="max-w-xl text-white"
								data-aos="fade-up"
								data-aos-duration="700"
								data-aos-once="true"
							>
								<span className="mb-3 block text-sm font-medium uppercase tracking-[0.25em] text-white/80">
									{data.subtitle || 'Nueva colección'}
								</span>

								<h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
									{data.title}
								</h1>

								{data.span && (
									<span className="mt-2 block text-4xl font-medium italic sm:text-5xl lg:text-6xl">
										{data.span}
									</span>
								)}

								<p className="mt-5 max-w-md text-sm leading-6 text-white/85 sm:text-base">
									{data.description}
								</p>

								<div className="mt-7">
									<Link
										to={data.link}
										className="inline-flex items-center justify-center bg-black px-7 py-3 transition-all bg-white 
										text-sm font-medium tracking-wide text-gray-900
										transition duration-300
										hover:bg-transparent hover:text-white"
									>
										{data.buttonText || 'Comprar ahora'}
									
										
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}

			{/* Flechas */}
			<div className="absolute bottom-8 right-6 z-20 flex gap-2 sm:right-10 lg:right-16">
				<button
					type="button"
					onClick={prevSlide}
					aria-label="Imagen anterior"
					className="flex h-11 w-11 items-center justify-center
					border border-white/60 bg-black/20 text-xl text-white
					backdrop-blur-sm transition
					hover:bg-white hover:text-gray-900"
				>
					←
				</button>

				<button
					type="button"
					onClick={nextSlide}
					aria-label="Siguiente imagen"
					className="flex h-11 w-11 items-center justify-center
					border border-white/60 bg-black/20 text-xl text-white
					backdrop-blur-sm transition
					hover:bg-white hover:text-gray-900"
				>
					→
				</button>
			</div>

			{/* Indicadores */}
			<div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 gap-2">
				{ImageList.map((_, index) => (
					<button
						key={index}
						type="button"
						onClick={() => setCurrentSlide(index)}
						aria-label={`Ir a la diapositiva ${index + 1}`}
						aria-current={
							index === currentSlider ? 'true' : undefined
						}
						className={`h-1.5 transition-all duration-300 ${
							index === currentSlider
								? 'w-8 bg-white'
								: 'w-4 bg-white/50'
						}`}
					/>
				))}
			</div>
		</section>
	);
};

export default HeroSlider;
