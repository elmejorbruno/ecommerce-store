import React, { useState } from 'react'
import ProductCard from '../../Components/Card/ProductCard'
import Breadcrumb from '../../Components/CategoryPages/Breadcrumb'
import ProductFilter from '../../Components/CategoryPages/ProductFilter'
import SortBar from '../../Components/CategoryPages/SortBar'
import ProductGrid from '../../Components/CategoryPages/ProductGrid'
import CategoryHero from '../../Components/CategoryPages/CategoryHero'
import { heroData } from '../../Components/Data/DataHero'
import CollectionsCategory from '../../Components/CategoryPages/CollectionsCategory/CollectionsCategory'
import { womenCollections } from '../../Components/Data/collectionsData/WomenCollectionsData'

const Women = () => {
  const [sortState, setSortState] = useState({ sort: "relevance", perPage: 12, view: "grid"});

  const handleFilters = (filters) => {
    console.log("filtros aplicados", filters)
    // Aqui luego filtrarás los productos
  };

  return (
    <article className='dark:bg-gray-950'>
 
     <CategoryHero 
     {...heroData.women}
      />
    <div className='container flex flex-col md:flex-row gap-18 '>
         <CollectionsCategory
            title="Colección"
           collections={womenCollections}
        />
         <div className="">

     {/* <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Moda de Dama", href: "/women" }
        ]}
      /> */}
    </div>
      {/* <ProductFilter onFilterChange={handleFilters}/>   */}
      {/* <SortBar 
        sort={sortState.sort}
        perPage={sortState.perPage}
        view={sortState.view}
        onChange={({type, value}) =>
        setSortState((s) => ({ ...s, [type]: value}))
      }
      /> */}
     
    </div>
    </article>
   
  )
}

export default Women