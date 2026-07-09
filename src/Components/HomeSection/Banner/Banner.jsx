import React from 'react'
import ImageChica from '../../../assets/img/women/modelo-blusa-negra.png'
import { IoFastFood } from 'react-icons/io5'
import { GrSecure } from 'react-icons/gr'

export const Banner = () => {
  return (
    <div className='min-h-[550px] flex 
    justify-center items-center py-12 sm:py-0 m-10'>
        <div className="container ">
            <div className="grid 
            grid-cols-1 sm:grid-cols-2 
            gap-6 items-center bg-hero/30 p-4" >
                {/* imagen */}
                <div data-aos="zoom-in" className="">
                    <img src={ImageChica} alt="Imagen del banner" className="max-w-[450px] h-[auto] w-full
                    max-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1) object-cover]" />
                </div>
                {/* text */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 
                    data-aos="fade-up"
                                className="text-3xl sm:text-4xl font-bold text-gray-900 ">
                        Rebajas de invierno de hasta 50%
                    </h1>
                    <p 
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5 ">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, quod.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div 
                        data-aos="fade-up"
                        className="flex items-center gap-4">
                            <GrSecure className='text-4xl h-9 w-9 shadow-sm p-2 rounded-full bg-orange-100
                            dark:bg-orange-400' />
                            <p className="">Quality Products</p>
                        </div>
                         <div 
                        data-aos="fade-up"
                        className="flex items-center gap-4">
                            <IoFastFood className='text-4xl h-9 w-9 shadow-sm p-2 rounded-full bg-orange-100
                            dark:bg-orange-400' />
                            <p className="">Fast Delivery</p>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
