import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryContent = ({ filteredItems, filterType, setFilterType, filterDate, setFilterDate }) => (
  <div>
    <div className="py-20 text-center text-white px-4"
         style={{
           backgroundImage: 'url(/images/event.png)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      <h2 className="text-4xl lg:text-6xl leading-snug font-bold mb-5">School Events and Activities</h2>
      <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
      Explore our dynamic school events and activities that highlight the vibrant community and student life at Model School.
      </p>
    </div>

    <div className="gallery-container max-w-7xl mx-auto px-4 py-8">
      <div className="filters mb-8 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="event">Events</option>
          <option value="activity">Activities</option>
        </select>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </div>
  </div>
);

export default GalleryContent;
