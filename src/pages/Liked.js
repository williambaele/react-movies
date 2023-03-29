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

  const fetchData = async () => {
    const newData = [];
    for (let i = 0; i < moviesId.length; i++) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=1a4b0f5e89813caf7e80649aed21c524&language=fr-FR`
      );
      newData.push(res.data);
    }
    setListData(newData);
  };

  fetchData();
    }, []);
    const removeAllLikes = () => {
      let newData = [];
      window.localStorage.movies = newData;
    }
  return (
    <div className="min-h-screen bg-[#1c2541]">
      <Header/>
      <div className="container mx-auto flex flex-col md:gap-4 py-4">
        <div className="flex justify-center">
          {listData.length > 0 ?
            <button className="bg-[#0b132b] w-1/3 py-1 rounded-lg" onClick={() =>{ removeAllLikes(); window.location.reload();}}>
              <p className="text-gray-300 text-md font-bold">Delete all liked movies</p>
            </button>
          : (
              ""
            )}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-10 px-4 md:px-0">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <div className="col-span-4 flex justify-center">
            <h2 className="text-3xl font-bold text-gray-300 text-center">Aucun coup de coeur pour le moment</h2>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Liked;
