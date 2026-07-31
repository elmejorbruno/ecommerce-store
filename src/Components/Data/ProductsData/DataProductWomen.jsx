import Img1 from "../../assets/img/women/vestido-elegante-gris.png"
import ModeloBlusaBlaca from "../../assets/img/women/modelo-blusa-blanca.png"
import ModeloTrajeCompletoBlanco from "../../assets/img/women/modelo-blusa-blanca-pantalo-blanco.png"
import VestidoNocheCrema from "../../assets/img/women/vestido-noche-elegante-crema.png"
import VestidoNocheDorado from "../../assets/img/women/vestido-noche-elegante-dorado.png"
import VestidoNocheNegro from "../../assets/img/women/vestido-noche-elegante-negro.png"
import BlusaTirasBlanca from "../../assets/img/women/blusa-tiras-blanca.png"
import BlusaTirasCrema from "../../assets/img/women/blusa-tiras-crema.png"
import BlusaTirasNegro from "../../assets/img/women/blusa-tiras-negra.png"
import PantalónAltoBeize from "../../assets/img/women/pantalón-vestir-dama-alto-beize.png"
import PantalónAltoBlanco from "../../assets/img/women/pantalón-vestir-dama-alto-blanco.png"
import PantalónAltoNegro from "../../assets/img/women/pantalón-vestir-dama-alto-negro.png"
import BlazerEleganteBlanco from "../../assets/img/women/blazer-elegante-blanco.png"
import BlazerEleganteCrema from "../../assets/img/women/blazer-elegante-crema.png"
import BlazerEleganteNegro from "../../assets/img/women/blazer-elegante-negro.png"

export const dataProductWomen = [
   

      {
        id: 1,
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
               code:"#f0efe7",

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
        id: 2,
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
        id: 3,
        title: "Blazer Elegante Blanco",
         variants: [
            {
               color: "Blanco",
               code:"#fff",
               image: BlazerEleganteBlanco ,
            },

             {
               color: "Crema",
               image: BlazerEleganteCrema,
               code:"#f0efe7",
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
    
      
  
]