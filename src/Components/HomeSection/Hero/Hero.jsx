import React from 'react'
import HeroSlider from '../../HomeSection/Hero/HeroSlider';


const Hero = () => {


  return (
    <div className='relative overflow-hidden 
        min-h-[700px] sm:min-h-[650px] lg:min-h-[750px] 
        bg-gray-100 flex justify-center items-start
         pt-24 dark:bg-gray-950 text-gray-900 z-10  dark:text-white duration-200'>
 
        {/* <img src={Tienda} alt="Estande de tienda de ropa" className="absolute -top-1/9 right-0  object-cover" /> */}
        <div className="container relative">
        {/*  Fondo o background pattern */}
          <div className="max-h-[900px] h-[40vw] max-w-[600px] w-[50vw] bg-hero/90 dark:bg-primary/30 absolute -top-90 right-[1%] rounded-2xl rotate-[70deg] duration-300"/>
          <div className="max-h-[910px] h-[90vw] max-w-[600px] w-[45vw] bg-fondo/80 dark:bg-slate-800/50 absolute -top-120 right-[0%] rounded-2xl duration-300"/>
          <div className="max-h-[900px] h-[90vw] max-w-[400px] w-[30vw] bg-fondo/40 dark:bg-slate-900/40 absolute -top-1/3 left-[0%] rounded-2xl     duration-300"/>
        <div className="container pb-8 sm:pb-0 ">
            <HeroSlider/>
        </div> 
        
        </div>
        {/* hero section*/}
       
    </div>
   
  )
}

export default Hero