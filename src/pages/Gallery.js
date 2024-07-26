import React, { useState, useEffect } from 'react';
import GalleryContent from '../components/Gallery/GalleryContent';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    // Fetch the JSON data
    fetch('/gallery_items.json')
      .then(response => response.json())
      .then(data => setGalleryItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterGallery = () => {
    return galleryItems.filter(item => {
      const typeMatch = filterType === 'all' || item.type === filterType;
      const dateMatch = !filterDate || item.date === filterDate;
      return typeMatch && dateMatch;
    });
  };

  const filteredItems = filterGallery();

  return (
    <GalleryContent
      filteredItems={filteredItems}
      filterType={filterType}
      setFilterType={setFilterType}
      filterDate={filterDate}
      setFilterDate={setFilterDate}
    />
  );
};

export default Gallery;
