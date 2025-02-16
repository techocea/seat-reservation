import React from 'react';

const Found = () => {
  const foundItems = [
    { id: 1, name: 'Car Keys', description: 'Found near the main entrance on Feb 14th.' },
    { id: 2, name: 'Apple AirPods', description: 'Spotted in the library study area.' },
    { id: 3, name: 'Water Bottle (Red)', description: 'Left on the sports ground bench.' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-500 mb-4">Found Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foundItems.map(item => (
          <div 
            key={item.id} 
            className="border border-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Found;
