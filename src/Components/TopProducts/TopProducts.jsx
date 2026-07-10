import React from 'react'
import { bestProductsData } from '../Data/BestProductsData'
import { FaStar } from 'react-icons/fa6'

const TopProducts = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <div className="text-left mb-20">
					<p data-aos="fade-up" className="text-sm text-primary">Top</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">Los mejores productos</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						{/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam eaque aspernatur
						similique inventore ipsum consectetur voluptatem, architecto incidunt earum sequi
						tenetur qui facere ipsam voluptatibus culpa. Magnam, iusto sed. */}
					</p>
				</div>
            {/* Body section */}
            <div className="grid grid-cols-1 
            sm:grid-cols-3 md:grid-cols-3 5 gap-20 md:gap-5 place-items-center">
            {bestProductsData.map((product) => (
                    <div 
                    data-aos="zoom-in" 
                    className="rounded-2xl bg-black 
                    dark:bg-gray-800 hover:bg-black/90 
                    dark:hover:bg-primary hover:text-white 
                    relative shadow-xl duration-high group max-w-[300px]">
                        {/* {image section} */}
                        <div className="h-[100px]">
                            <img src={product.img} alt={product.title} className="max-w-[200px] block mx-auto transform -translate-y-24 
                            group-hover:scale-105 duration-300 drop-shadow-md " />
                        </div>
                        {/* details section */}
                        <div className="p-4 text-center ">
                            {/* star rating */}
                            <div className="w-full flex items-center 
                            justify-center gap-1 ">
                                <FaStar className="text-yellow-500 " />
                                <FaStar className="text-yellow-500 " />
                                <FaStar className="text-yellow-500 " />
                                <FaStar className="text-yellow-500 " />

                            </div>
                            <h1 className="text-2xl font-bold">{product.title}</h1>
                            <p className="text-gray-500
                            group-hover:text-white duration-300 
                            text-sm line-clamp-2">{product.description}</p>
                            <button className="bg-fondo hover:scale-105
                            duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                            group-hover:text-primary"
                            // onClick={handleOrderPopup}
                            >
                                Ordena ahora
                            </button>
                            

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