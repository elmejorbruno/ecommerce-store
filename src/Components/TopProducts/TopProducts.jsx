import React from 'react'
import { bestProductsData } from '../Data/BestProductsData'

const TopProducts = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <div className="text-left mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam eaque aspernatur
						similique inventore ipsum consectetur voluptatem, architecto incidunt earum sequi
						tenetur qui facere ipsam voluptatibus culpa. Magnam, iusto sed.
					</p>
				</div>
            {/* Body section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 5 gap-20 md:gap-5 place-items-center">
            {bestProductsData.map((product) => (
                    <div className="rounded-2xl bg-white 
                    dark:bg-gray-800 hover:bg-black/80 
                    dark:hover:bg-primary hover:text-white 
                    relative shadow-xl duration-high group max-w-[300px]:">
                        {/* {image section} */}
                        <div className="bg-gray-200 rounded-lg overflow-hidden">
                            <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default TopProducts