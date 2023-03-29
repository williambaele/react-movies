import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

const Liked = () => {

  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
    ? window.localStorage.movies.split(",")
    : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
      }
    }, []);

  return (
    <div className="min-h-screen bg-[#1c2541]">
      <Header/>
      <div className="container mx-auto flex flex-col md:gap-4 py-4">
        <div className="flex justify-center">
          {listData.length > 0 ?
            <button className="bg-[#0b132b] w-1/2 py-1 rounded-lg">
            <p className="text-gray-300 font-bold">Delete all liked movies</p>
            </button>
          : (
              ""
            )}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-10 px-4 md:px-0">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
        </div>
      </div>
    </div>
  );
};

export default Liked;
