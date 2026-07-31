import React from 'react';
import { Link } from 'react-router-dom';

const CollectionsCard = ({ title, image, category, slug, alt }) => {
	return (
		 <Link
      to={`/${category}/${slug}`}
      aria-label={`View ${title} collection`}
      className="group block overflow-hidden rounded-lg"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          className="
            h-80
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
          text-lg
          font-medium
          tracking-wide
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-black
        "
      >
        {title}
      </h3>
    </Link>
	);
};

export default CollectionsCard;
