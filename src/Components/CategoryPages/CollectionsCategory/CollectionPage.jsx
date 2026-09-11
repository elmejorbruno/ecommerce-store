
import { useParams } from 'react-router-dom'
import ProductGrid from '../ProductGrid';

import { allDataProduct } from '../../Data/ProductsData/AllDataProducts';
import { allCollectionsData } from '../../Data/collectionsData/AllCollectionsData';

const CollectionPage = () => {
    const { collectionSlug } = useParams();

    //Busca la coleccion
    const collection = allCollectionsData.find(
        (item) => item.slug === collectionSlug
    );

    //Buscar los productos de esa coleccion
    const products = allDataProduct.filter(
        (item) => 
          item.category === collection?.category &&
          item.collection === collectionSlug
    );

  // Colección inexistente
    if (!collection) {
      
        return (
            <section className="container py-24 text-center">
                <h2 className="text-3xl font-bold">
                    Colección no encontrada
                </h2>
            </section>
        )
    }
  return (
    <section className='py-39 dark:bg-gray-950'>
        {/* Hero */}

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-12 ">

          <div>


            <img
              src={collection.image}
              alt={collection.title}
              className="w-full rounded-3xl object-cover w-full  rounded-2xl"
            />

          </div>

        {/* Información */}
          <div className='w-full min-w-0'>

            <span className="uppercase tracking-[3px] text-xs font-medium text-gray-500 dark:text-gray-400">
              Colección
            </span>

            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {collection.title}
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-7 text-gray-600 ark:text-gray-300">
              {collection.description}
            </p>

           
          
          {/*PRODUCTOS ====================================== */}
          
        <div className=" mt-8 w-full">

          <div className="mb-5">
              <span className="text-gray-500 dark:text-gray-400">

              {products.length} productos

            </span>
            <h2 className="text-3xl font-semibold py-3 text-gray-900 dark:text-white">

              Products

            </h2>

          </div>

           <ProductGrid
          products={products}
          columns="collection"
        />
      </div>    
     
          </div>
        </div>

      </div>

    
    </section>
  )
}

export default CollectionPage