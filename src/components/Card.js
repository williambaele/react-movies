import { useLocation } from "react-router-dom";

const Card = ({ movie }) => {
  const location = useLocation();

  const addLike = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
    console.log(storedData);
  }

  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };


  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push({ id: 28, name: `Action` });
          break;
        case 12:
          genreArray.push({ id: 12, name: `Aventure` });
          break;
        case 16:
          genreArray.push({ id: 16, name: `Animation` });
          break;
        case 35:
          genreArray.push({ id: 35, name: `Comédie` });
          break;
        case 80:
          genreArray.push({ id: 80, name: `Policier` });
          break;
        case 99:
          genreArray.push({ id: 99, name: `Documentaire` });
          break;
        case 18:
          genreArray.push({ id: 18, name: `Drame` });
          break;
        case 10751:
          genreArray.push({ id: 10751, name: `Famille` });
          break;
        case 14:
          genreArray.push({ id: 14, name: `Fantasy` });
          break;
        case 36:
          genreArray.push({ id: 36, name: `Histoire` });
          break;
        case 27:
          genreArray.push({ id: 27, name: `Horreur` });
          break;
        case 10402:
          genreArray.push({ id: 10402, name: `Musique` });
          break;
        case 9648:
          genreArray.push({ id: 9648, name: `Mystère` });
          break;
        case 10749:
          genreArray.push({ id: 10749, name: `Romance` });
          break;
        case 878:
          genreArray.push({ id: 878, name: `Fiction` });
          break;
        case 10770:
          genreArray.push({ id: 10770, name: `Téléfilm` });
          break;
        case 53:
          genreArray.push({ id: 53, name: `Thriller` });
          break;
        case 10752:
          genreArray.push({ id: 10752, name: `Guerre` });
          break;
        case 37:
          genreArray.push({ id: 37, name: `Western` });
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) =>  <div className="flex items-center">
    <p className="w-fit bg-[#3a506b] py-0.5 px-2 rounded-lg items-center text-xs text-gray-300" key={genre}>{genre.name}</p>
  </div>);
  };

  return (
    <div className="grid gap-4 shadow-sm hover:shadow-md overflow-hidden">
      <div className="flex bg-[#0b132b] p-4 rounded-lg gap-6 hover:shadow-md" key={movie.id}>
        <div className="grid gap-2">
          <div className="flex justify-center h-60 ">
          <img className="rounded-lg" src={ movie.poster_path ? "https://image.tmdb.org/t/p/original/" + movie.poster_path : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"} alt={`affiche ${movie.title}`}/>
          </div>
          <h2 className="font-bold text-2xl text-left text-gray-200 content-start">
            {movie.original_title}
          </h2>
          <p className="text-gray-400">Sorti le {dateFormater(movie.release_date)}</p>
          <div className="flex gap-1 items-center">
            <svg className="pb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFF00" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <div className="flex gap-1 items-center">
              <p className="font-large text-lg text-gray-200 italic">{movie.vote_average}</p>
              <p className="text-gray-200 text-xs pt-1">({movie.vote_count})</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
          {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre) => <div className="flex flex-wrap items-center">
          <p className="w-fit bg-[#3a506b] py-0.5 px-2 rounded-lg items-center text-xs text-gray-300" key={genre}>{genre.name}</p>
        </div>)}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-left text-gray-200">Synposis</h3>
            <p className="text-gray-400">
            {movie.overview.substring(0,120)}
            </p>
          </div>
          <div className="flex  gap-4 justify-center">
            <btn className="hover:scale-125 cursor-pointer" target="_blank" href={`https://www.youtube.com/results?search_query= ${movie.original_title} trailer`} rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </btn>
            { location.pathname === "/" ?
              <btn onClick={() => addLike()} className="hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" className="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
              </btn>
            :
              <btn onClick={() => addLike()} className="hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FF0000" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
              </btn>
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
