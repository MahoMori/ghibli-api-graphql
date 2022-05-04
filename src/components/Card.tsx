import React from "react";

import { InitialQueryType } from "../App";

const Card = (data: InitialQueryType) => {
  const {
    image,
    title,
    description,
    original_title,
    original_title_romanised,
    release_date,
  } = data;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2">
          <p className="font-bold text-xl mb-2">{title}</p>
          <p className="font-bold text-sm mb-2">
            {original_title} ({original_title_romanised})
          </p>
          <p className="text-gray-500 underline underline-offset-4">
            Release date: {release_date}
          </p>
        </div>
        <p className="text-gray-700 text-left">{description}</p>
      </div>
    </div>
  );
};

export default Card;
