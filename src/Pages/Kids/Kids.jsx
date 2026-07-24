import React from 'react'
import CategoryHero from '../../Components/CategoryPages/CategoryHero'
import { heroData } from '../../Components/Data/DataHero'

const Kids = () => {
  return (
    <article>
      <CategoryHero
      {...heroData.kids}/>
    </article>
  )
}

export default Kids