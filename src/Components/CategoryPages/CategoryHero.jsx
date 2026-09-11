


const CategoryHero = ({  subtitle,
  title,
  slogan,
  description,
  image,
  alt,
  primaryButton,
  secondaryButton, }) => {

  return (
    <section
      className="relative w-full overflow-hidden bg-[var(--color-fondo-beige)] dark:bg-gray-900 dark:text-white"
      
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 lg:px-40 pt-24 sm:pt-28 md:pt-32 py-30 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-6 items-center  dark:bg-gray-900          /* 👈 versión oscura */
    ">

        {/* Texto */}
        <div data-aos="fade-up" data-aos-duration="900" className="text-center md:text-left ">
          <h4
            className="uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 text-[var(--color-secondary)] dark:text-gray-300"
           
          >
          {subtitle}
          </h4>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-light mb-3 sm:mb-4 font-bold "
          
          >
           {title}
          </h1>

          <p
            className="italic text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-bold"
          
          >
            {slogan}
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto md:mx-0"
           
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              className="px-6 sm:px-8 py-3 text-sm tracking-wide transition-all"
             
            >
             {primaryButton}
            </button>

            <button
              className="px-6 sm:px-8 py-3 text-sm tracking-wide border transition-all"
             
            >
              {secondaryButton}
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div
          className="flex justify-center mt-1 md:mt-0 "
          data-aos="fade-left"
          data-aos-duration="900 "
        >
          <img
            src={image}
            alt={alt}
            className="w-[200px] sm:w-[260px] md:w-[250px] h-auto rounded-xl shadow-lg object-cover"
           

          />
        </div>
      </div>

      {/* Barra inferior */}
      <div
        className="py-6 border-t text-xs sm:text-sm"
     
      >
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-center gap-4"
          style={{ color: "var(--color-black)", opacity: 0.7 }}
        >
          <div>🚚 <strong>Envío gratis</strong> en pedidos superiores a $50</div>
          <div>💎 <strong>Calidad premium</strong> materiales seleccionados</div>
          <div>🔁 <strong>Devoluciones fáciles</strong> hasta 30 días</div>
        </div>
      </div>
    </section>
  );
}
export default CategoryHero;
