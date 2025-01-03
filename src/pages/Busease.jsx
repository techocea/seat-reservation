import React, { useState } from 'react';

function BusEase({ theme }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSearch = () => {
    // Mock data for available buses
    const availableBuses = [
      { id: 1, name: 'Bus 101', from: 'Galle', to: 'Matara', time: '10:00 AM' },
      { id: 2, name: 'Bus 102', from: 'Galle', to: 'Matara', time: '12:00 PM' },
      { id: 3, name: 'Bus 103', from: 'Galle', to: 'Matara', time: '02:00 PM' },
    ];

    // Filter buses based on user input
    const filteredBuses = availableBuses.filter(
      (bus) => bus.from.toLowerCase() === from.toLowerCase() && bus.to.toLowerCase() === to.toLowerCase()
    );

    setBuses(filteredBuses);
  };

  return (
    <div className={`w-full min-h-screen flex flex-col justify-start items-center pt-10 ${theme === 'light' ? 'bg-cyan-500' : 'bg-slate-900'}`}>
      <h1 className={`text-4xl font-bold mb-9 flex justify-center items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>BusEase</h1>
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
              From
            </label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
              To
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mt-6">
        {buses.length > 0 ? (
          <ul className="bg-white rounded-lg shadow-md p-4">
            {buses.map((bus) => (
              <li key={bus.id} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">{bus.name}</h3>
                    <p>{bus.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{bus.from} to {bus.to}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No buses available for the selected route.</p>
        )}
      </div>
    </div>
  );
}

export default BusEase;