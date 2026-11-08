import React from 'react'
import { categoriaData } from './categoriaData'
import { Link } from 'react-router-dom'

const Categoria = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">

        {/* HEADER DE LA SECCION */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
            data-aos="fade-up"
            
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary ">Descubre tu estilo</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Explora tu seccion</h2>
          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base ">
            Encuentra prendas que reflejen tu personalidad.
            Elegancia y estilo para cada momento.
          </p>
          
        </div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categoriaData.map((category, index) => (
            <Link
            key={category.id}
            to={category.link}
            aria-label={`Explorar colección de ${category.name}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative isolate block aspect-[4/5] overflow-hidden rounded-xl bg-gray-200 shadow-lg focus-visible:outline-none focus-visible:right-2 focus-visible:right-primary focus-visible:ring-offset-4"
          >
            {/* Imagen de categoria */}
            <img 
            src={category.image} 
            alt={category.alt} 
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

             {/* Degradado para mejorar la legibilidad */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/85">
              {/* contenido de la targeta */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-wide sm:text-3xl">{category.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-sm font-medium">Coleccion</span>
                </div>
             </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categoria