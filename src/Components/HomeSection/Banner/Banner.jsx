import React from 'react'
import ImageChica from '../../../assets/img/women/modelo-blusa-negra.webp'
import { IoFastFood } from 'react-icons/io5'
import { GrSecure } from 'react-icons/gr'

export const Banner = () => {
  return (
    <section className='mx-4 my-10 flex 
        min-h-[550px] justify-center items-center  rounded-2xl
                bg-gray-50
                py-12
                dark:bg-gray-950
                sm:mx-6
                lg:mx-10'>
        <div className="container w-full">
            
            <div className="grid 
            grid-cols-1 sm:grid-cols-2 
            gap-6 items-center
                        rounded-2xl
                        bg-hero/30
                        p-6
                        dark:bg-slate-900/70
                        sm:p-8
                        lg:grid-cols-2
                        lg:gap-12" >
                {/* imagen */}
                <div data-aos="zoom-in" className="flex
                            justify-center
                            lg:justify-start">
                    <img 
                        src={ImageChica} 
                        alt="Imagen del banner" 
                        className="h-auto
                                w-full max-w-[450px]
                      object-contain
                                drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]
                                sm:max-w-[380px]
                                lg:max-w-[450px]" />
                </div>
                {/* text */}
                <div className="flex flex-col justify-center gap-6  text-center
                            sm:text-left">
                    <h2 
                    data-aos="fade-up"
                                className="text-3xl  font-bold text-gray-500 dark:text-gray-300 sm:text-4xl">
                        Rebajas de invierno de hasta 50%
                    </h2>
                    <p 
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5 dark:text-gray-300">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, quod.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div 
                        data-aos="fade-up"
                        className="flex items-center gap-4">
                            <GrSecure className='text-4xl h-9 w-9 shadow-sm p-2 rounded-full bg-orange-100
                            dark:bg-orange-400' />
                            <p className="dark:text-gray-300">Quality Products</p>
                        </div>
                         <div 
                        data-aos="fade-up"
                        className="flex items-center gap-4">
                            <IoFastFood className='text-4xl h-9 w-9 shadow-sm p-2 rounded-full bg-orange-100
                            dark:bg-orange-400' />
                            <p className="dark:text-gray-300">Fast Delivery</p>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
