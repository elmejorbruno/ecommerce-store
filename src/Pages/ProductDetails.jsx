import React from 'react'
import { ProductsData } from '../Components/Data/ProductsData';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';

const ProductDetails = () => {

  const { id } = useParams();

  

  const product = ProductsData.find(
        item => item.id === Number(id)
    );

    if (!product) {

         return (
            <div className="container py-32 text-center">

                Producto no encontrado

            </div>
        );

    }

  return (
    <section className="py-40 bg-white dark:bg-slate-950">

    <div className="container">

        <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            items-start"
        >

            {/* Imagen */}

            <div
                className="
                bg-gray-100
                dark:bg-slate-900
                rounded-3xl
                p-8
                flex
                justify-center
                items-center"
            >

                <img
                    src={product.img}
                    alt={product.title}
                    className="
                    w-full
                    max-w-md
                    object-contain
                    duration-300
                    hover:scale-105"
                />

            </div>

            {/* Información */}

            <div>

                {
                /* Aquí irá toda la información */}
              <div className="space-y-5">

                <h1
                    className="
                    text-4xl
                    font-bold
                    text-gray-900
                    dark:text-white"
                >
                    {product.title}
                </h1>

                {/* Rating */}

                <div className="flex items-center gap-2">

                    <FaStar className="text-yellow-400"/>

                    <span>{product.rating}</span>

                </div>

                {/* Precio */}

                <div className="flex items-center gap-4">

                    <span
                        className="
                        text-4xl
                        font-bold
                        text-button"
                    >
                        ${product.price}
                    </span>

                    {product.oldPrice && (

                        <span
                            className="
                            text-xl
                            text-gray-400
                            line-through"
                        >
                            ${product.oldPrice}
                        </span>

                    )}

                </div>

                {/* Descripción */}

                <div>

                    <h3 className="font-semibold mb-2">

                        Descripción

                    </h3>

                    <p className="text-gray-500 leading-7">

                        {product.description}

                    </p>

                </div>

          

            <div>
              <h3 className="font-semibold mb-3">
                  Colores
              </h3>

              <div className="flex gap-4">
                  {product.colors?.map((color)=>(
                      <span
                          key={color.name}

                          className="
                          w-10
                          h-10
                          rounded-full
                          border-2
                          border-gray-300
                          cursor-pointer
                          hover:scale-110
                          duration-300"

                          style={{

                              backgroundColor:color.code

                          }}
                          title={color.name}
                      />

                  ))}

              </div>

          </div>
          
          <div>

    <h3 className="font-semibold mb-3">

        Tallas

    </h3>

    <div className="flex gap-3">

        {product.sizes.map((size)=>(

            <button

                key={size}

                className="
                w-12
                h-12
                rounded-xl
                border
                hover:bg-button
                hover:text-white
                duration-300"

            >

                {size}

            </button>

        ))}

    </div>

</div>
          <div>

    <h3 className="font-semibold mb-3">

        Cantidad

    </h3>

    <div
        className="
        inline-flex
        items-center
        rounded-xl
        border"
    >

        <button className="px-5 py-3">

            -

        </button>

        <span className="px-6">

            1

        </span>

        <button className="px-5 py-3">

            +

        </button>

    </div>

</div>
            <div>
              <p>
                <strong>Stock: </strong>
                {product.stock}
              </p>
              <p>
                <strong>SKU: </strong>
                {product.sku}
              </p>

          </div>
          
          <button

                className="
                w-full
                sm:w-auto
                px-10
                py-4
                rounded-2xl
                bg-button
                hover:bg-black
                text-white
                font-semibold
                duration-300"

                >

                Agregar al carrito

                </button>
              </div>
            </div>
          </div>
        </div>  
</section>
  )
}
// ojo siguiente trabajo
// construir páginas como Women, Men, Kids, el carrito y la integración 
// con Python usando siempre la misma tarjeta reutilizable.

export default ProductDetails