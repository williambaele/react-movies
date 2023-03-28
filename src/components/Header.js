import React from 'react';

const Header = () => {
  return (
    <div class="flex h-24 items-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-medium text-center text-gray-100 w-full">React Movies</h1>
          <div className="justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
