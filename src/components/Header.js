import React from 'react';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20 flex items-center shadow-black">
      <img
        className="w-40 ml-8 my-4 bg-gradient-to-t to-black"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
