import React from 'react'
import CategoryHero from '../../Components/CategoryPages/CategoryHero'
import { heroData } from '../../Components/Data/DataHero'
import CollectionsCategory from '../../Components/CategoryPages/CollectionsCategory/CollectionsCategory'
import { dataKidsCollections } from '../../Components/Data/collectionsData/KidsCollectionsData'

const Kids = () => {
  return (
    <article>
      <CategoryHero
      {...heroData.kids}/>
      <div className="container">
        <CollectionsCategory
          title="Colección de Niños"
          collections={dataKidsCollections}
        />
      </div>
    </article>
  )
}

export default Kids