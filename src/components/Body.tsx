import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotosList from './PhotosList';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const Body: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // implementing caching. Assuming checks for data changes (ie. new photos uploaded) are not required.
    const fetchPhotos = async () => {
      const cachedPhotos = localStorage.getItem('photos');
      if (cachedPhotos) {
        setPhotos(JSON.parse(cachedPhotos));
      } else {
        // fetch data from website using axio.
        const response = await axios.get('http://jsonplaceholder.typicode.com/photos');
        // adjust the number to the required amount of photos. Currently set to 10 for simplicity.
        const photosData = response.data.slice(0, 10); 
        localStorage.setItem('photos', JSON.stringify(photosData));
        setPhotos(photosData);
      }
    };

    fetchPhotos();
  }, []);

  const shuffleArray = (array: Photo[]): Photo[] => {
    const shuffle = (arr: Photo[], currentIndex: number = arr.length - 1): Photo[] => {
      if (currentIndex <= 0) return arr;
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
      return shuffle(arr, currentIndex - 1);
    };
    return shuffle([...array]);
  };

  const handleShuffle = () => {
    setPhotos(shuffleArray(photos));
  };

  return (
    <div className="flex flex-col items-center justify-center" style={{ height: 'calc(100vh - 128px)' }}>
      <div className="w-full flex justify-center overflow-hidden">
        <PhotosList photos={photos} />
      </div>
      <button
        // button at bottom of screen to handle shuffle
        className="mt-10 bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-4 ease-linear transition-all duration-150"
        type="button"
        onClick={handleShuffle}
      >
        Shuffle Photos
      </button>
    </div>
  );
};

export default Body;