import React from 'react';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface PhotosListProps {
  photos: Photo[];
}

const PhotosList: React.FC<PhotosListProps> = ({ photos }) => {
  return (
    // horizontal scrollable list
    <div className="flex overflow-auto pb-4 space-x-4">
      {photos.map((photo) => (
        <div key={photo.id} className="min-w-max relative shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          <img src={photo.thumbnailUrl} alt={photo.title} className="h-60 w-full object-cover" />
          <h2 className="absolute text-white text-md font-bold transform -rotate-45 -translate-y-1/2 bottom-1/2 left-4">
            {photo.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PhotosList;