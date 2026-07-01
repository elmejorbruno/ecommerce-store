import React, { useEffect, useState } from 'react'
import { ImageList } from '../Data/SliderData';


const HeroSlider = () => {

    const [currentSlider, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
            prev === ImageList.length - 1 ? 0 : prev + 1
        );
        }, 4000);
         
        return () => clearInterval(interval);
    }, []);

   const prevSlide = () => {
    setCurrentSlide((prev) => 
        prev === 0 ? ImageList.length - 1 : prev - 1
    );
   };
    const nextSlide = () => {
        setCurrentSlide((prev) => 
        prev === ImageList.length - 1 ? 0 : prev + 1
        );
    };
  return (
    <>
      
       {ImageList.map((data, index) => (
        <div
            key={data.id}
            className={`${
                index === currentSlider ? "block" : "hidden"
            }`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 border-amber-100 ">
                    {/* Texto */}
                    <div className="flex flex-col justify-center gap-4 pt-2 sm:pt-0 text-center sm:text-left
                        order-2 sm:order-2 relative z-10 ">
                        <h1 
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className='text-4xl sm:text-5xl lg:text-7xl leading-16 font-bold text-gray-900 dark:text-white'>
                            {data.title}
                        </h1>
                        <span className=" font-handwriting text-5xl sm:text-6xl lg:text-8xl text-primary dark:text-secondary font-bold">
                            {data.span}
                        </span>
                        <p 
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className=" text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-mdc mx-auto sm:mx-0">
                                {data.description}</p>
                        <div 
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                            className="">
                            <button className=" bg-gradient-to-r from-black to-button hover:scale-105 duration-200 text-white py-3 px-6 w-full sm:w-auto rounded-2xl">
                                Compra ahora
                            </button>
                        </div>
                    </div>
                    {/* Imagen */}
                    <div className="order-2 sm:order-2">
                        <div 
                        data-aos="zoom-out"
                        data-aos-once="true"
                        className="relative z-10 ">
                            <img 
                            src={data.img} 
                            alt={data.title} 
                            className='  w-[420px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] object-contain mx-auto sm:scale-110' />
                            
                        </div>
                    </div>
                </div>
        </div>
       ))} 
       {/* Botones  */}
       <div className="flex justify-center gap-3 mt-6 ">
            <button className=" w-10 h-10
          rounded-full
          bg-white
          dark:bg-slate-800
          shadow font-bold" 
                onClick={nextSlide}>
                 ←
            </button>
        <button className="w-10 h-10 rounded-b-full bg-white
            dark:bg-slate-800 font-bold
          shadow"
            onClick={prevSlide}
            >
                 →   
        </button>
       </div>
    </>
  )
}

export default HeroSlider