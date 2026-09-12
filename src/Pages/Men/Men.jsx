import React from 'react'

import CategoryHero from '../../Components/CategoryPages/CategoryHero';
import { heroData} from '../../Components/Data/DataHero'
import CollectionsCategory from '../../Components/CategoryPages/CollectionsCategory/CollectionsCategory';
import { dataMenCollections } from '../../Components/Data/collectionsData/MenCollectionsData';

const Men = () => {
 

  return (
    <article>
      <CategoryHero
       {...heroData.men}
      />
      <div className="container ">
    <CollectionsCategory
      title="Colección de Hombres"
      collections={dataMenCollections}
    />
      </div>
    </article>
  )
}

export default Men