import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div class="flex h-24 items-center px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
        { location.pathname === "/liked" ? <h1 className="text-4xl font-medium text-center text-gray-100 w-full">Liked Movies</h1> : <h1 className="text-4xl font-medium text-center text-gray-100 w-full">React Movies</h1> }
          <div className="justify-end cursor-pointer hover:shadow-md hover:scale-125">
          { location.pathname === "/liked" ?
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" class="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
            </svg>
          </Link>
            :
          <Link to="/liked">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
