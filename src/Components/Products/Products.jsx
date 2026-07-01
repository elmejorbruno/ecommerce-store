import React from 'react';
import { ProductsData } from '../Data/ProductsData';
import { FaStar } from 'react-icons/fa6';

const Products = () => {

	return (

		<div className="mt-14 mb-12">
			<div className="container">
				{/* Header section */}

				<div className="text-center mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam eaque aspernatur
						similique inventore ipsum consectetur voluptatem, architecto incidunt earum sequi
						tenetur qui facere ipsam voluptatibus culpa. Magnam, iusto sed.
					</p>
				</div>
				{/* Body section */}
				<div className="">
					<div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6 ">
						{/* card srction */}
						{ProductsData.map((data) => (
							<div 
							data-aos="fade-up"
							data-aos-delay={data.aosDelay}
							key={data.id} className="space-y-3">
								<img src={data.img} alt="data.alt" className="h-[220px] w-[150px] object-cover rounded-md " />
                                <div className="">
                                    <h3 className="font.semibold">{data.title}</h3>
                                    <p className="text.sm text-gray-600">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className='text-yellow-500'/>
                                        <span className="">{data.rating}</span>
                                    </div>
                                </div>
							</div>

						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
