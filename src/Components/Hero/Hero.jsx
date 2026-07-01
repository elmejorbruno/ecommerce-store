import React from 'react'
import HeroSlider from './HeroSlider';
import Tienda from '../../assets/img/estante-en-tienda.png'

const Hero = () => {


  return (
    <div className='relative overflow-hidden min-h-[700px] sm:min-h-[650px] lg:min-h-[750px] bg-gray-100 flex justify-center items-start
         pt-24 dark:bg-gray-950 text-gray-900 z-10  dark:text-white duration-200'>
 
        {/* <img src={Tienda} alt="Estande de tienda de ropa" className="absolute -top-1/9 right-0  object-cover" /> */}
        <div className="">
        {/*  Fondo o background pattern */}
          <div className="h-[790px] w-[500px] bg-hero/90 dark:bg-primary/30 absolute -top-1/2 right-0 rounded-2xl rotate-[70deg] duration-300"/>
          <div className="h-[900px] w-[700px] bg-fondo/80 dark:bg-slate-800/50 absolute -top-1/2 right-0 rounded-2xl duration-300"/>
          <div className="h-[990px] w-[300px] bg-fondo/40 dark:bg-slate-900/40 absolute -top-1/2 left-0 rounded-2xl     duration-300"/>
        </div>
        {/* hero section*/}
        <div className="container pb-8 sm:pb-0 ">
            <HeroSlider/>
        </div>
    </div>
    //  <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
    //     {/* background pattern */}
    //     <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 ">

    //     </div>
    //     {/* hero section*/}
    //     <div className="container pb-8 sm:pb-0">
    //         {/* <Slider {...settings}> */}
    //         <div className="">
    //             {ImageList.map((data) => (
    //                     <div key={data.id} className="">
    //                 <div className="grid grid-cols-1 sm:grid-cols-2 ">
    //                     {/* text content section */}
    //                   <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
    //                     order-2 sm:order-2 relative z-10">
    //                         <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
    //                            {data.title}
                                
    //                         </h1>
    //                         <span className='font-handwriting text-6xl text-primary font-bold'>{data.span}</span>
    //                         <p className='text-sm'>
    //                           {data.description}
    //                         </p>
    //                         <div className="">
    //                             <button className='bg-gradient-to-r 
    //                             from-primary to-secondary hover:scale-105 duration-200 text-white  py-2 px-4 rounded-2xl'>
    //                                 Compra ahora
    //                             </button> 
    //                         </div>
                            
    //                     </div>
    //                 {/* imagen section */}
    //                 <div className="order-2 sm:order-2">
    //                     <div className="relative z-10">
    //                     <img src={data.img} alt="" className="w-[600px] h-[600px] sm:h-[300px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
    //                     </div>
    //                 </div>

    //                 </div>
    //             </div> 
    //             ))}
    //           </div>
    //         {/* </Slider> */}
         
    //     </div>
    // </div>
  )
}

export default Hero