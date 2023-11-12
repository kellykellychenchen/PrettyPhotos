import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <main className="mb-auto">
        <Body/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
