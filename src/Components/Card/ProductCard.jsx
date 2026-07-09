import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductCard = ({
    id,
    img,
    title,
    price,
    oldPrice,
    rating,
    colors = [],
    stock,
    badge,
    aosDelay,
}) => {
    // Ojo la data que se usa en estas card son de ProductData
  return (
    <article  className="group  w-full
    max-w-[280px] bg-white dark:bg-slate-900 rounded-3xl
        overflow-hidden shadow-md hover:shadow-2xl duration-300
        border border-gray-100 dark:border-slate-800">
          

        <div  
            data-aos="fade-up"
			data-aos-delay={aosDelay}
            data-aos-duration="800"
                
            className="relative 
            |   h-[340px]
                verflow-hidden bg-gray-100 dark:bg-slate-800">
            {badge && (
                <span
                className="
                absolute
                top-4
                left-4
                z-20
                bg-blue
                text-white
                text-xs
                font-semibold
                px-3
                py-1
                rounded-full
                shadow"
                >
                {badge}
                </span>
            )}
     
            <img
                src={img}
                alt={title}
                className="
                w-full
                h-[340px]
                object-cover
                object-center
                group-hover:scale-105
                duration-500
                "
            />

        </div>
        <div className="p-2">
        <div className="justify-items-center">
            <h2
                className="
                text-xl
                font-bold
               text-gray-900
                dark:text-white
                line-clamp-1"
                    >
                {title}
            </h2>
        </div>
        <div className="flex items-center gap-2 mt-2">

            <FaStar className="text-yellow-400" />

            <span className="text-gray-600 dark:text-gray-300">
                {rating}
            </span>

        </div>

        <div className="flex items-center gap-3 mt-4">

        <span
            className="
            text-2xl
            font-bold
            text-button"
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
        
        <div className="flex items-center gap-3 mt-5">

        {colors.map((color) => (

            <span
            key={color.name}
            className="
            w-6
            h-6
            rounded-full
            border-2
            border-white
            shadow
            cursor-pointer
            hover:scale-110
            duration-300"
            style={{
                backgroundColor: color.code,
            }}
            title={color.name}
            />

        ))}

        </div> 
        </div>
        <p
            className="
            mt-5
            text-sm
            text-gray-500"
            >

            {stock > 0
                ? `Disponible (${stock})`
                : "Agotado"}

            </p>
            <Link
            to={`/product/${id}`}
            className="
            mt-6
            inline-flex
            justify-center
            items-center
            w-full
            rounded-xl
            bg-black
            hover:bg-fondo
            text-white
            py-2
            font-semibold
            duration-300"
            >

            Ver producto

                        </Link>
     

    </article>
  )
}

export default ProductCard