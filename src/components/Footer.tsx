import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center text-xs p-3 w-full">
        <p>&copy; {new Date().getFullYear()} Pretty Photos. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
