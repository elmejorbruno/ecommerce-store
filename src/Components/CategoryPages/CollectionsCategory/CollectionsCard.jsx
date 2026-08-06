import React from 'react';
import { Link } from 'react-router-dom';

const CollectionsCard = ({ title, image, category, slug, alt }) => {
	return (
		 <Link
      to={`/${category}/${slug}`}
      aria-label={`View ${title} collection`}
      className="group block w-full
                overflow-hidden
                rounded-2xl"
    >
      <div className=" relative
                    aspect-[4/7]
                    w-full
                    overflow-hidden
                    rounded-2xl
                    bg-gray-100
                    dark:bg-slate-800">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          className="
              h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
          "
        />
      </div>

      <h3
        className="
          mt-4
                    text-center
                    text-base
                    font-medium
                    tracking-wide
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-gray-600
                    sm:text-lg
                    dark:text-gray-100
                    dark:group-hover:text-gray-300
        "
      >
        {title}
      </h3>
    </Link>
	);
};

export default CollectionsCard;
