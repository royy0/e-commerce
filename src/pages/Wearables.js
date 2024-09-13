import React from 'react';

const wearables = [
  { id: 1, name: 'Apple Watch Series 8', price: '$399', image: 'C:\Users\wanjo\Desktop\e-commerce\ecommerce-site\src\pages\images\apple.jpeg' },
  { id: 2, name: 'Samsung Galaxy Watch 5', price: '$299', image: 'src/pages/images/samsung.jpeg' },
  { id: 3, name: 'Fitbit Versa 4', price: '$229', image: 'src/pages/images/fitbit.jpeg' },
  { id: 4, name: 'Oppo Watch', price: '$205', image: 'src/pages/images/oppo.jpeg' },
  { id: 5, name: 'Lambogiini Designed Watch', price: '$2200', image: 'src/pages/images/lamboghini.jpeg' },
  { id: 6, name: 'Oppo Watch', price: '$205', image: 'src/pages/images/oppo.jpeg' },
  { id: 7, name: 'Gemini Watch', price: '$105', image: 'src/pages/images/gemin.jpeg' },



];

const Wearables = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Wearables</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wearables.map(wearable => (
          <div key={wearable.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={wearable.image} alt={wearable.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{wearable.name}</h3>
              <p className="text-gray-700">{wearable.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wearables;
