import Img1 from "../../../assets/img/women/vestido-elegante-gris.webp"
import ModeloBlusaBlaca from "../../../assets/img/women/modelo-blusa-blanca.webp"
import ModeloTrajeCompletoBlanco from "../../../assets/img/women/modelo-blusa-blanca-pantalo-blanco.webp"
import VestidoNocheCrema from "../../../assets/img/women/vestido-noche-elegante-crema.webp"
import VestidoNocheDorado from "../../../assets/img/women/vestido-noche-elegante-dorado.webp"
import VestidoNocheNegro from "../../../assets/img/women/vestido-noche-elegante-negro.webp"
import VestidoFiestaGrid from "../../../assets/img/women/vestido-elegante-gris.webp"
import VestidoFiestaNegro from "../../../assets/img/women/vestido-elegante-negro.webp"
import BlusaTirasBlanca from "../../../assets/img/women/blusa-tiras-blanca.png"
import BlusaTirasCrema from "../../../assets/img/women/blusa-tiras-crema.webp"
import BlusaTirasNegro from "../../../assets/img/women/blusa-tiras-negra.webp"
import PantalónAltoBeize from "../../../assets/img/women/pantalón-vestir-dama-alto-beize.webp"
import PantalónAltoBlanco from "../../../assets/img/women/pantalón-vestir-dama-alto-blanco.webp"
import PantalónAltoNegro from "../../../assets/img/women/pantalón-vestir-dama-alto-negro.webp"
import BlazerEleganteBlanco from "../../../assets/img/women/blazer-elegante-blanco.webp"
import BlazerEleganteCrema from "../../../assets/img/women/blazer-elegante-crema.webp"
import BlazerEleganteNegro from "../../../assets/img/women/blazer-elegante-negro.webp"
import CamisaEjecutivaBlanca from "../../../assets/img/women/blusa-blanca-fondo-beige.webp"
import CamisaEjecutivaNegra from "../../../assets/img/women/blusa-negra-fondo-beige.webp"
import FaldaEjecutivaBeige from "../../../assets/img/women/falda-beige-fondo-baige.webp"


export const dataProductWomen = [
   

      {
        id: "blusa-satinada",
        title: "Blusa Satinada",
        variants: [
            {
               color: "Blanca",
               image: BlusaTirasBlanca,
               code:"#ffffff",

            },

             {
               color: "Crema",
               image: BlusaTirasCrema,
               code:"#c5c19f",

            },

             {
               color: "Negro",
               code:"#000000",
               image: BlusaTirasNegro,
            }
        ],
        category:"women",
        collection: "executive-sets",
        type: "single",
        
        rating:4.5,
        price:19.99,
        oldPrice:39.99,
        badge:"Nuevo", 
        sizes:["S","M"],
         description: 
               "Blusa satinada con escote drapeado tipo cowl neckline, confeccionada en seda suave con brillo natural. Su caída fluida y textura luminosa aportan un toque sofisticado y femenino, ideal para looks de noche o conjuntos minimalistas.",

        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      },
       

        {
        id: "pantalon-alto",
        title: "Pantalon Alto",
         variants: [
            {
               color: "Beize",
               code:"#c5b08f",
               image: PantalónAltoBeize,
            },

             {
               color: "Blanco",
               code:"#ffffff",
               image: PantalónAltoBlanco,
            },

             {
               color: "Negro",
               code:"#000000",
               image: PantalónAltoNegro,
            }
        ],
        category:"women",
       collection: "executive-sets",
        type: "single",
        rating:4.5,
        price:39.99,
        oldPrice:49.99,
        badge:"Nuevo", 
        sizes:["S","M"],
        description: 
              "Pantalón de lino premium de tiro alto y corte recto con pinzas frontales. Su diseño estiliza la figura y aporta una caída impecable, ideal para combinar con blazers o tops satinados. Un básico atemporal para un guardarropa sofisticado.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      },

       
        {
        id: "blazer-elegante",
        title: "Blazer Elegante",
         variants: [
            {
               color: "Blanco",
               code:"#fff",
               image: BlazerEleganteBlanco ,
            },

             {
               color: "Crema",
               image: BlazerEleganteCrema,
               code:"#cac6a4",
            },

             {
               color: "Negro",
               code:"#000000",
               image: BlazerEleganteNegro,
            }
        ],
        category:"women",
         collection: "executive-sets",
        type: "single",
        rating:4.5,
        price:49.99,
        oldPrice:59.99,
        badge:"Nuevo", 
        sizes:["S","M"],
       
        description: 
              "Blazer estructurado de lino premium con acabado natural y costuras visibles. Presenta solapas clásicas, cierre frontal con botón único y hombros definidos que realzan la silueta. Perfecto para elevar cualquier conjunto con un aire profesional y elegante.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      },  
        {
        id: "vestido-de-fiesta-elegante",
        title: "Vestido de fiesta elegante",
         variants: [
           
           
             {
               color: "Negro",
               code:"#000000",
               image: VestidoFiestaNegro,
            }, 
             {
               color: "Gris",
               image: VestidoFiestaGrid,
               code:"#ccc7cf",
            },

        ],
        category:"women",
         collection: "evening-party-dresses",
        type: "single",
        rating:4.5,
        price:49.99,
        oldPrice:59.99,
        badge:"Nuevo", 
        sizes:["S","M"],
       
        description: 
              "Blazer estructurado de lino premium con acabado natural y costuras visibles. Presenta solapas clásicas, cierre frontal con botón único y hombros definidos que realzan la silueta. Perfecto para elevar cualquier conjunto con un aire profesional y elegante.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      },    
     {
        id: "vestido-de-noche",
        title: "Vestido de noche",
         variants: [
           
           
             {
               color: "Dorado",
               code:"#bb8116",
               image: VestidoNocheDorado,
            }, 
             {
               color: "Crema",
               image: VestidoNocheCrema,
               code:"#c5c19f",
            },
              {
               color: "Negro",
               image: VestidoNocheNegro,
               code:"#000",
            },

        ],
        category:"women",
         collection: "evening-dresses",
        type: "single",
        rating:4.5,
        price:49.99,
        oldPrice:59.99,
        badge:"Nuevo", 
        sizes:["S","M"],
       
        description: 
              "Blazer estructurado de lino premium con acabado natural y costuras visibles. Presenta solapas clásicas, cierre frontal con botón único y hombros definidos que realzan la silueta. Perfecto para elevar cualquier conjunto con un aire profesional y elegante.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      },    
        {
        id: "camisa-ejecutiva",
        title: "Camisa ejecutiva",
         variants: [
           
             {
               color: "Gris",
               image: CamisaEjecutivaBlanca,
               code:"#fff",
            },

             {
               color: "Negro",
               code:"#000000",
               image: CamisaEjecutivaNegra,
            }
        ],
        category:"women",
         collection: "traje-ejecutivo",
        type: "single",
        rating:4.5,
        price:49.99,
        oldPrice:59.99,
        badge:"Nuevo", 
        sizes:["S","M"],
       
        description: 
              "Blazer estructurado de lino premium con acabado natural y costuras visibles. Presenta solapas clásicas, cierre frontal con botón único y hombros definidos que realzan la silueta. Perfecto para elevar cualquier conjunto con un aire profesional y elegante.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      }, 

       {
        id: "falda-ejecutiva",
        title: "Falda ejecutiva",
         variants: [
           
             {
               color: "Beize",
               image: FaldaEjecutivaBeige,
               code:"#ddd0c1",
            },

           
        ],
        category:"women",
        collection: "traje-ejecutivo",
        type: "single",
        rating:4.5,
        price:49.99,
        oldPrice:59.99,
        badge:"Nuevo", 
        sizes:["S","M"],
       
        description: 
              "Blazer estructurado de lino premium con acabado natural y costuras visibles. Presenta solapas clásicas, cierre frontal con botón único y hombros definidos que realzan la silueta. Perfecto para elevar cualquier conjunto con un aire profesional y elegante.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
      }, 
  
]