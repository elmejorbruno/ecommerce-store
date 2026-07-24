import React from 'react'

import CategoryHero from '../../Components/CategoryPages/CategoryHero';
import { heroData } from '../../Components/Data/DataHero';

const Men = () => {
 

  return (
    <article>
      <CategoryHero
       {...heroData.men}
      />
    </article>
  )
}

export default Men