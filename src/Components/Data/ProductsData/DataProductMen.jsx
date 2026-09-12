 import CamisaMangaLargaGris from '../../../assets/img/men/camisa-men-gris.png'
 import CamisaPantalonClasicoGris from '../../../assets/img/men/camisa-men-gris.png'
 import CamisaMangaLargaNegra from '../../../assets/img/men/camisa-men-negra.png'
 import CamisaImpresindibleAzulMarino from '../../../assets/img/men/camisa-masculina-corte-elegante-azul-marino-imprescindible.webp'
 import CamisaImpresindibleBlancoMarfil from '../../../assets/img/men/camisa-masculina-corte-elegante-blanco-marfil-imprescindible.webp'
 import CamisaImpresindibleVerde from '../../../assets/img/men/camisa-masculina-corte-elegante-verde-oliva-imprescindible.webp'
 import PantalonImpresindibleCharcoal from '../../../assets/img/men/pantalon-masculina-corte-imprescindible-charcoal.webp'
 import PantalonImpresindibleGray from '../../../assets/img/men/pantalon-masculina-corte-imprescindible-gris-piedra-stone-gray.webp'
 import PantalonImpresindibleBeige from '../../../assets/img/men/pantalon-masculina-corte-imprescindible-sand-beige-beige-arena.webp'
 import ChaquetaMinimalBlack from '../../../assets/img/men/jacket-black-deep.webp'
 import ChaquetaMinimalGris from '../../../assets/img/men/jacket-charcoal-gray.webp'
 import ChaquetaMinimalBlanco from '../../../assets/img/men/jacket-offwhite.webp'
 import SueteCuelloAltoMinimalCarbon from '../../../assets/img/men/turtleneck-carbon.webp'
 import SueteCuelloAltoMinimalCharcoal from '../../../assets/img/men/turtleneck-charcoal-gray.webp'
 import SueteCuelloAltoMinimalBlanco from '../../../assets/img/men/turtleneck-offwhite.webp'
 import PantalonMinimalBlack from '../../../assets/img/men/pants-black-deep.webp'
 import PantalonMinimalCharcoal from '../../../assets/img/men/pants-charcoal-black.webp'
 import PantalonMinimalGris from '../../../assets/img/men/modelo-camisa-gris-pantalon-negro.png'

export const dataProductMen = [
   {
      id: 1,
      title: "Camisa manga larga",
      variants:[
         {  color: "Negro",
            image: CamisaMangaLargaNegra,
            code: "#000000" 
      
         },
         { 
            color:"Gris",
            image: CamisaMangaLargaGris,
            code:"#808080"
         },
             ],
      category: "men",
      collection: "camisa-manga-larga",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
      description: 
         "Chaqueta elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
      stock:15,
      sku:"WE-001",
      aosDelay: "0"
          },

    {
      id: 2,
      title: "Camisa y pantalón gris",
      variants:[
         {  color: "Gris",
            image: CamisaPantalonClasicoGris,
            code: "#b7b7c7" 
      
         },
       
             ],
      category: "men",
      collection: "clasico",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
              
      
         description: 
         "Chaqueta elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
         stock:15,
              sku:"WE-001",
              aosDelay: "0"
          },
   
            {
      id: 3,
      title: "Chaqueta minimalista",
    
      category: "men",
      collection: "esencia-minimal",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
              
      variants:[
         {  color: "Blanco",
            image: ChaquetaMinimalBlanco,
            code: "#F3F0E8" 
      
         },
         { 
            color:"Gris",
            image: ChaquetaMinimalGris,
            code:"#66705C"
         },
          { 
            color:"Negro",
            image: ChaquetaMinimalBlack,
            code:" #172536"
         },
             ],
         description: 
         "Camisa elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
         stock:15,
              sku:"WE-001",
              aosDelay: "0"
          },
            {
      id: 4,
      title: "Camisa minimalista",
     
      category: "men",
      collection: "esencia-minimal",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
              
      variants:[
         {  color: "Blanco",
            image: SueteCuelloAltoMinimalBlanco,
            code: "#F3F0E8" 
      
         },
         { 
            color:"Verde oliva grisáceo",
            image: SueteCuelloAltoMinimalCharcoal,
            code:"#66705C"
         },
          { 
            color:"Negro",
            image: SueteCuelloAltoMinimalCarbon,
            code:" #172536"
         },
             ],
         description: 
         "Camisa elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
         stock:15,
              sku:"WE-001",
              aosDelay: "0"
          },
            {
      id: 5,
      title: "Pantalon minimalista",
     
      category: "men",
      collection: "esencia-minimal",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
              
      variants:[
         {  color: "Negro",
            image: PantalonMinimalBlack,
            code: "#F3F0E8" 
      
         },
         { 
            color:"Gris",
            image: PantalonMinimalGris,
            code:"#66705C"
         },
          { 
            color:"Azul marino profundo",
            image: PantalonMinimalCharcoal,
            code:" #172536"
         },
             ],
         description: 
         "Camisa elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
         stock:15,
              sku:"WE-001",
              aosDelay: "0"
          },
          {
      id: 6,
      title: "Camisa",
     
      category: "men",
      collection: "imprescindible",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
              
      variants:[
         {  color: "Blanco marfil",
            image: CamisaImpresindibleBlancoMarfil,
            code: "#F3F0E8" 
      
         },
         { 
            color:"Verde oliva grisáceo",
            image: CamisaImpresindibleVerde,
            code:"#66705C"
         },
          { 
            color:"Azul marino profundo",
            image: CamisaImpresindibleAzulMarino,
            code:" #172536"
         },
             ],
         description: 
         "Camisa elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
         stock:15,
              sku:"WE-001",
              aosDelay: "0"
          },
           {
      id: 7,
      title: "Pantalo clásico",
     
      category: "men",
      collection: "imprescindible",
      type: "single",
      rating:5.0,
      price:49.99,
          
      oldPrice:69.99,
      badge:"Nuevo",
     
      sizes:["S","M","L"],
              
      variants:[
         {  color: "Charcoal",
            image: PantalonImpresindibleCharcoal,
            code: "#242424" 
      
         },
         { 
            color:"Stone Gray ",
            image: PantalonImpresindibleGray,
            code:"#686864"
         },
          { 
            color:"Sand Beige",
            image: PantalonImpresindibleBeige,
            code:" #B5A58D"
         },
             ],
         description: 
         "Camisa elegante confeccionada con tela suave y ligera. Ideal para eventos, reuniones.",
         stock:15,
              sku:"WE-001",
              aosDelay: "0"
          },
]