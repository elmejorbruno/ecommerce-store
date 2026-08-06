import ImagenHero from '../../assets/img/women/modelo-hero-women.webp'
import ImagenMen from '../../assets/img/men/modelo-hero-men.png'
import ImagenNinoNina from '../../assets/img/kids/modelos-ninos-hero2.png'


export const heroData = {

    women: {
        subtitle: "Nueva coleccion",
        title: "DAMA",
        slogan: "Elegancia y Estilo para Cada Ocasión",
        descripcion: 
            "Elegancia moderna con piezas diseñadas para realzar tu esencia en cada ocasión.",
        image: ImagenHero,
        primaryButton: "VER COLECCIÓN",
            secondaryButton: "NUEVAS TENDENCIAS",
            alt: "Modelo con vestido elegante blanco"
    },
    men: {
        subtitle: "Nueva colección",
        title: "HOMBRE",
        slogan: "Estilo para el Hombre Moderno",
        description:
            "Prendas elegantes con un diseño contemporáneo para cada momento.",
        image: ImagenMen,
        primaryButton: "VER COLECCIÓN",
        secondaryButton: "NUEVAS TENDENCIAS",
        alt: "Modelo categoría hombre",
  },

    kids: {
        subtitle: "Nueva colección",
        title: "NIÑOS",
        slogan: "Moda para los más pequeños",
        description:
        "Comodidad y estilo para acompañar cada aventura.",
        image: ImagenNinoNina,
        primaryButton: "VER COLECCIÓN",
        secondaryButton: "NUEVAS TENDENCIAS",
        alt: "Modelo categoría niños",
    },
};