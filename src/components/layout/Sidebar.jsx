import { useState } from 'react';

export default function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sample bus data - replace with your actual data
  const busRoutes = [
    {
      id: '1',
      from: 'Kathmandu',
      to: 'Pokhara',
      provider: 'Tourist Bus Seva',
      price: 'NPR 800',
      duration: '7 hours',
      departureTime: '9:00 AM',
      type: 'Tourist Bus',
      facilities: ['AC', 'WiFi', 'Water']
    },
    {
      id: '2',
      from: 'Kathmandu',
      to: 'Pokhara',
      provider: 'Deluxe Night Bus',
      price: 'NPR 1200',
      duration: '7 hours',
      departureTime: '5:00 PM',
      type: 'Deluxe',
      facilities: ['AC', 'WiFi', 'Blanket', 'Water']
    },
    {
      id: '3',
      from: 'Kathmandu',
      to: 'Chitwan',
      provider: 'Local Bus',
      price: 'NPR 300',
      duration: '4 hours',
      departureTime: '8:00 AM',
      type: 'Local',
      facilities: ['Water']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredRoutes = submitted ? busRoutes.filter(
    route => 
      route.from.toLowerCase().includes(from.toLowerCase()) &&
      route.to.toLowerCase().includes(to.toLowerCase())
  ) : [];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="w-100 bg-white shadow-lg p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Nepal Travel Guide</h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">From:</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter departure city"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">To:</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter destination city"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Search Routes
          </button>
        </form>

        {/* Route Cards */}
        <div className="space-y-4">
          {submitted && filteredRoutes.map(route => (
            <div key={route.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{route.provider}</h3>
                  <p className="text-gray-600">{route.type}</p>
                </div>
                <span className="text-xl font-bold text-green-600">{route.price}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <p className="text-sm text-gray-600">Departure Time</p>
                  <p className="font-medium">{route.departureTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-medium">{route.duration}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Facilities</p>
                <div className="flex flex-wrap gap-2">
                  {route.facilities.map((facility, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}