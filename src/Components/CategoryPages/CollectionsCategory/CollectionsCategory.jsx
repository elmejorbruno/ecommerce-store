import React from 'react'
import CollectionsCard from './CollectionsCard'

const CollectionsCategory = ({title, collections = []}) => {
  return (
    <section
        className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'
        aria-labelledby='collections-heading'>
            {title && (
                <h2 
                id="collections-heading"
                className='mb-8 text-3xl font-semibold text-gray-900'>
                    {title}
                  
                </h2>
            )}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2
                lg:grid-cols-4">
                
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