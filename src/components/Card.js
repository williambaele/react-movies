import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className="grid gap-4 shadow-sm hover:shadow-md">
      <div className="flex bg-[#0b132b] p-4 rounded-lg gap-6 hover:shadow-md" key={movie.id}>
        {/* <div>
          <img src={movie.strMealThumb} alt="" className="max-h-80 rounded-lg"/>
        </div> */}
        <div className="grid gap-2">
          <div className="flex justify-center h-60 ">
            <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={`poster ${movie.original_title}`} className="rounded-lg" />
          </div>
          <h2 className="font-bold text-2xl text-left text-gray-200 content-start">
            {movie.original_title}
          </h2>
          <div className="flex gap-1 items-center">
            <svg className="pb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFF00" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <p className="font-large text-lg text-gray-200 italic">{movie.vote_average}</p>
          </div>
          <p className="text-gray-400">Sorti le {movie.release_date.toLocaleString()}</p>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-left text-gray-200">Synposis</h3>
            <p className="text-gray-400">
            {movie.overview.substring(0,100)}
            </p>
          </div>
          <div className="flex  gap-4 justify-center">
            <a className="hover:scale-125" target="_blank" href={`https://www.youtube.com/results?search_query= ${movie.original_title} trailer`}>              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </a>
            <a href="#" className="hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
