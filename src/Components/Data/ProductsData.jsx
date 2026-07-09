import Img1 from "../../assets/img/women/vestido-elegante-gris.png"
import ModeloBlusaBlaca from "../../assets/img/women/modelo-blusa-blanca.png"
import Img3 from "../../assets/img/men/modelo-men-camisa-negra.png"
import Img4 from "../../assets/img/img-4.4.png"
import Img5 from "../../assets/img/men/modelo-camisa-gris-pantalon-negro.png"
import { FaStar } from "react-icons/fa6"

export const ProductsData = [
    {
        id: 1,
        category: "women",
        title: "Vestido elegante",
        img:Img1,

        rating:5.0,
        price:49.99,
        
        oldPrice:69.99,
        badge:"Nuevo",

        sizes:["S","M","L"],
        
        colors:[
         {  name: "Negro",
            code: "#000000" 

         },
         { 
            name:"Gris",
            code:"#808080"
         },
        ],
        description: 
            "Vestido elegante confeccionado con tela suave y ligera. Ideal para eventos, reuniones.",
        stock:15,
        sku:"WE-001",
        aosDelay: "0"
    },
    {
        id: 2,
        title: "Blusa Casual",
        category:"women",
        img:ModeloBlusaBlaca,
        rating:4.5,
         price:49.99,

         oldPrice:69.99,
        badge:"Nuevo", 

        sizes:["S","M"],
        
        colors:[
         {  name: "Negro",
            code: "#000000" 

         },
         { 
            name:"Blanco",
            code:"#f1f1f1"
         },
        ],
        description: 
            "Blusa elegante, ligera. Ideal para eventos, reuniones o una salida casual.",
        stock:15,
        sku:"WE-001",
        
        aosDelay: "0"
    },
    {
        id: 3,
        title: "Camisa Slim",
        category:"men",
        img:Img3,
        rating:4.7,
         price:29.99,
          
         oldPrice:69.99,
        badge:"Nuevo",
        
        colors:[
         {  name: "Negro",
            code: "#000000" 

         },
         { 
            name:"Gris",
            code:"#808080"
         },
        ],
        description: 
            "Camisa slim elegante, ligera. Ideal para eventos, reuniones o una salida casual.",
        stock:15,
        sku:"WE-001",
        
        sizes:["S","M","L"],
        aosDelay: "400"
    },
    {
        id: 4,
        title: "Camisa infantil",
        category:"kids",
        img:Img4,
        rating: 4.4,
       price:39.99,
        badge:"Nuevo",
        
        colors:[
         {  name: "Azul",
            code: "#0000ff" 

         },
         { 
            name:"Gris",
            code:"#808080"
         },
        ],
        description: 
            " Camisa infantil elegante, ligera. Ideal para eventos, reuniones o una salida casual.",
        stock:15,
        sku:"WE-001",
        
        sizes:["S","M","L"],
        aosDelay: "600"
    },
    {
        id: 5,
        img:Img5,
        title: "Fashin T-Shirt",
        category:"kids",
        rating: 4.5,
        price:49.99,
        
        oldPrice:69.99,
        badge:"Nuevo",
        
        colors:[
         {  name: "Negro",
            code: "#000000" 

         },
         { 
            name:"Gris",
            code:"#808080"
         },
        ],
        description: 
            "Blusa elegante, ligera. Ideal para eventos, reuniones o una salida casual.",
        stock:15,
        sku:"WE-001",
        
        sizes:["S","M","L"],

        aosDelay: "800"
    },
   {
        id: 5,
        img:Img5,
        title: "Fashin T-Shirt",
        category:"kids",
        rating: 4.5,
        price:49.99,
        
        oldPrice:69.99,
        badge:"Nuevo",
        
        colors:[
         {  name: "Negro",
            code: "#000000" 

         },
         { 
            name:"Gris",
            code:"#808080"
         },
        ],
        description: 
            "Blusa elegante, ligera. Ideal para eventos, reuniones o una salida casual.",
        stock:15,
        sku:"WE-001",
        
        sizes:["S","M","L"],

        aosDelay: "800"
    },

]