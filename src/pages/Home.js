import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../components/Card';
import Header from '../components/Header';


const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=1a4b0f5e89813caf7e80649aed21c524&query=" + search + "&language=fr-FR")
        .then((res) => setMoviesData(res.data.results));
      }, [search]);


  return (
    <div className="min-h-screen bg-[#1c2541]">
      <Header/>
      <div className="container mx-auto flex flex-col gap-4 py-4">
        <div className="w-1/3 self-center">
          <form>
            <div>
              <div className="flex rounded-md overflow-hidden w-full">
                <input type="text" className="w-full rounded-md rounded-r-none outline-none pl-4" placeholder='Your next movie' value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md outline-none">Go</button>
              </div>
            </div>
          </form>
        </div>
        <div class="grid grid-cols2 md:grid-cols-4 gap-4">
        {moviesData.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
