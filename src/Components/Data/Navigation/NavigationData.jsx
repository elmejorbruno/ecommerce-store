import  ImagenNinoNina from '../../../assets/img/kids/modelos-ninos-hero2.png'
import  ImagenMen from '../../../assets/img/men/modelo-hero-men.png'
import  ImagenWomen from '../../../assets/img/women/modelo-hero-women.webp'

export const MenuItem = [
    {
        id: 'inicio',
        name: 'Inicio',
        link: '/',
    },
    {
        id: 'productos',
        name: 'Productos',
        link: '/women',
        description: 'Estilo en cada momento',
        items: [
              {
                id: 'dama',
                name: 'Dama',
                link: '/women',
                image: ImagenWomen,
                alt:'Imagen de dama',
                items: [
                            {
                id: 'colecciones',
                name: 'Colecciones',
                link: '/collections',
            },
                    {
                id: 'vestidos',
                name: 'Vestidos',
                link: '/dresses',
            },
               {
                id: 'tops-blusas',
                name: 'Tops y Blusas',
                link: '/tops-blusas',
            },
               {
                id: 'pantalones',
                name: 'Pantalones',
                link: '/pants',
            },
               {
                id: 'faldas',
                name: 'Faldas',
                link: '/skirts',
            },
                ],
            },
            {
                id: 'caballero',
                name: 'Caballero',
                link: '/men',
                image: ImagenMen,
                alt:'Imagen de caballero',
                description: 'Fuerza y estilo en cada paso',
                items: [
                    //futuras categorias
                ],
            },
            {
                id: 'ninos',
                name: 'Niño y Niñas',
                link: '/kids',
                image: ImagenNinoNina,
                alt:'Imagen de niños y niñas',
                description: 'Pequeños grandes momentos',
                items: [
                    //futuras categorias
                ],
            },
        ],
    },
    {
        id: 'Atencion-al-cliente',
        name: 'Atención al cliente',
       
          items: [
               {
        id: 'envios',
        name: 'Envíos',
        link: '/shipping',
      
    },
       {
        id: 'devoluciones',
        name: 'Devoluciones',
        link: '/returns',
      
    },
       {
        id: 'preguntas-frecuentes',
        name: 'Preguntas frecuentes',
        link: '/faq',
       
    },
    


        ],
    },
    {
        id: 'Contacto',
        name: 'Contacto',
        link: '/contact',
       
    },
];

export const MegaMenuPromo = {
  title: 'Descubre nuestras nuevas colecciones',
   description: 'Encuentra nuevas prendas para expresar tu estilo.',
  buttonText: 'Ver más',
  link: '/collections',
  image: null,
};