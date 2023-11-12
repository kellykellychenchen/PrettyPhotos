import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-violet-300 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold">Pretty Photos</h1>
      </div>
    </nav>
  );
};

export default Header;
