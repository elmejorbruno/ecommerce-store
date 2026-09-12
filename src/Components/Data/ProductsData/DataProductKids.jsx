import SoftTaupe from '../../../assets/img/kids/softtaupe.webp'
import CamisaInfantilRosa from '../../../assets/img/kids/camisa-nina-rosa.png'
import CamisaInfantilBeige from '../../../assets/img/kids/camisa-nuna-beige-arena.png'
import CamisaInfantilMarfil from '../../../assets/img/kids/camisa-nuna-beige-marfil.png'
import PantalonMinimalRosa from '../../../assets/img/kids/pants-dustypink.png'
import PantalonMinimalMarfil from '../../../assets/img/kids/pants-infantil-ivory.png'
import PantalonMinimalBeige from '../../../assets/img/kids/pants_beigesand.png'
import ZapatitosBeige from '../../../assets/img/kids/shoes-beigesand.png'
import ZapatitosRosa from '../../../assets/img/kids/shoes-dustypink.png'
import ZapatitosMarfil from '../../../assets/img/kids/shoes_ivory.png'

export const dataProductKids = [
      {
    id: "blazer-beige",
    title: "Blazer Beige",
    category: "kids",
    gender: "boys",
    collection: "classic-beige",

    // slug: "blazer-beige",


    variants: [
      {
        color: "Beige",
        image: SoftTaupe ,
        code: "#C7B49D"
      }
    ],

    rating: 5.0,
    price: 59.99,
    oldPrice: 79.99,
    badge: "Nuevo",

    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],

    description:
      "Blazer infantil de corte elegante confeccionado en un tejido ligero y cómodo. Una prenda sofisticada para ocasiones especiales.",

    stock: 15,
    sku: "KID-BOY-BLZ-001",
    aosDelay: "0"
  },



  {
    id: "pantalon-beige",
    title: "Pantalón Beige",
    category: "kids",
    gender: "boys",

    collection: "classic-beige",

    // slug: "pantalon-beige",


    variants: [
      {
        color: "Beige",
        image: SoftTaupe ,
        code: "#B5A58D"
      }
    ],

    rating: 5.0,
    price: 44.99,
    oldPrice: 59.99,
    badge: "Nuevo",

    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],

    description:
      "Pantalón infantil de corte elegante en tono beige, pensado para combinar con camisas y blazers de la colección.",

    stock: 15,
    sku: "KID-BOY-PNT-001",
    aosDelay: "200"
  },

  {
    id: "mocasines-marron",
    title: "Mocasines Marrón",
    category: "kids",
    gender: "boys",

    collection: "classic-beige",

    // slug: "mocasines-marron",


    variants: [
      {
        color: "Marrón",
        image: SoftTaupe ,
        code: "#6B5544"
      }
    ],

    rating: 5.0,
    price: 49.99,
    oldPrice: 64.99,
    badge: "Nuevo",

    sizes: ["28", "29", "30", "31", "32", "33"],

    description:
      "Mocasines infantiles de estilo clásico en tono marrón, pensados para completar conjuntos elegantes.",

    stock: 10,
    sku: "KID-BOY-SHO-001",
    aosDelay: "300"
  },
  {
    id: "camisa-minimalista-infantil",
    title: "Camisa minimalista",
    category: "kids",
    gender: "boys",

    collection: "dulce-melodia",

    // slug: "dulce-melodia",


    variants: [
       {
        color: "Marfil",
        image: CamisaInfantilMarfil,
        code: "#f7f2ea"
      },
       {
        color: "Beige arena",
        image:  CamisaInfantilBeige,
        code: "#ebdcc8"
      },
       {
        color: "Rosa polvo",
        image:  CamisaInfantilRosa,
        code: "#e6c7c6"
      }
    ],

    rating: 5.0,
    price: 49.99,
    oldPrice: 64.99,
    badge: "Nuevo",

    sizes: ["28", "29", "30", "31", "32", "33"],

    description:
      "Mocasines infantiles de estilo clásico en tono marrón, pensados para completar conjuntos elegantes.",

    stock: 10,
    sku: "KID-BOY-SHO-001",
    aosDelay: "300"
  },
  
  {
    id: "pantalon-minimalista-infantil",
    title: "Pantalon minimalista",
    category: "kids",
    gender: "boys",

    collection: "dulce-melodia",

    // slug: "mocasines-marron",


    variants: [
      {
        color: "Marfil",
        image: PantalonMinimalMarfil,
        code: "#f7f2ea"
      },
       {
        color: "Beige arena",
        image: PantalonMinimalBeige,
        code: "#ebdcc8"
      },
       {
        color: "Rosa polvo",
        image: PantalonMinimalRosa,
        code: "#e6c7c6"
      }
    ],

    rating: 5.0,
    price: 49.99,
    oldPrice: 64.99,
    badge: "Nuevo",

    sizes: ["28", "29", "30", "31", "32", "33"],

    description:
      "Mocasines infantiles de estilo clásico en tono marrón, pensados para completar conjuntos elegantes.",

    stock: 10,
    sku: "KID-BOY-SHO-001",
    aosDelay: "300"
  },
    {
    id: "zapatitos",
    title: "Zapaticos",
    category: "kids",
    gender: "boys",

    collection: "dulce-melodia",

    // slug: "mocasines-marron",


    variants: [
      {
        color: "Marfil",
        image:  ZapatitosMarfil,
        code: "#f7f2ea"
      },
       {
        color: "Beige arena",
        image:  ZapatitosBeige,
        code: "#ebdcc8"
      },
       {
        color: "Rosa polvo",
        image:  ZapatitosRosa,
        code: "#e6c7c6"
      }
    ],

    rating: 5.0,
    price: 49.99,
    oldPrice: 64.99,
    badge: "Nuevo",

    sizes: ["28", "29", "30", "31", "32", "33"],

    description:
      "Mocasines infantiles de estilo clásico en tono marrón, pensados para completar conjuntos elegantes.",

    stock: 10,
    sku: "KID-BOY-SHO-001",
    aosDelay: "300"
  }
]