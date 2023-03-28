import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className="grid gap-4">
      <div className="flex bg-gray-200 p-4 rounded-lg gap-6 hover:shadow-md" key={movie.id}>
        {/* <div>
          <img src={movie.strMealThumb} alt="" className="max-h-80 rounded-lg"/>
        </div> */}
        <div className="grid gap-1">
          <h2 className="font-medium text-3xl text-left">
            {movie.original_title}
          </h2>
        </div>
      </div>

    </div>
  );
};

export default Card;
