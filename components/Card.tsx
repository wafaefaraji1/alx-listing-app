import React from 'react';
import Image from 'next/image';
import { CardProps } from '../interfaces';

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  rating,
  onButtonClick,
  buttonText = "Book Now"
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white border border-gray-200">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-6 py-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="px-6 py-2 flex justify-center gap-3 text-sm text-gray-700">
        <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
          ${price}/night
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
          ⭐ {rating}
        </span>
      </div>

      <div className="px-6 py-4">
        <button
          onClick={onButtonClick}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-md"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
