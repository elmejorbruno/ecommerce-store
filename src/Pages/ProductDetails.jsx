import React from 'react'
import { useParams } from 'react-router-dom';
import { ProductsData } from '../Components/Data/ProductsData';

const ProductDetails = () => {
   const { id } = useParams();

    const product = ProductsData.find(
        item => item.id === Number(id)
    );

    if (!product) {

        return (
            <div className="container py-32 text-center">

                Producto no encontrado

            </div>
        );

    }

    return (

        <section>

        </section>

  )
}
// ojo siguiente trabajo
// construir páginas como Women, Men, Kids, el carrito y la integración 
// con Python usando siempre la misma tarjeta reutilizable.

export default ProductDetails