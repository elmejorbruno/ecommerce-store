import React from 'react'
import CollectionsCard from './CollectionsCard'

const CollectionsCategory = ({title, collections = []}) => {
  return (
    <section
        className='mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-gray-900'
        aria-labelledby='collections-heading '>
            {title && (
                <h2 
                id="collections-heading"
                className='mb-8 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white'>
                    {title}
                  
                </h2>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3
                sm:gap-8
                    lg:grid-cols-5">
                
                {collections.map((collection) => (
                    <CollectionsCard
                        key={collection.id}
                        title={collection.title}
                        image={collection.image}
                        category={collection.category}
                        slug={collection.slug}
                        alt={collection.title}/>
                ))}
            </div>

    </section>
  )
}

export default CollectionsCategory