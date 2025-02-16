import React from 'react';

const Lost = () => {
  const lostItems = [
    { id: 1, name: 'Black Wallet', description: 'Lost near the library on Feb 10th.' },
    { id: 2, name: 'Samsung Galaxy S21', description: 'Left in the cafeteria around 2 PM.' },
    { id: 3, name: 'Backpack (Blue)', description: 'Lost during the sports event on Feb 12th.' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Lost Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lostItems.map(item => (
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

export default Lost;
