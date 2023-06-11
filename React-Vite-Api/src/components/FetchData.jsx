import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  const fetchGenre = async () => {
    try {
      const response = await fetch('https://localhost:7299/api/Genre');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchGenre}>Fetch Genre</button>

      {data && (
  <div>
    <h2>Genre Details</h2>
    {data.map((genre) => (
      <div key={genre.id}>
        <h3 style={{ textAlign: 'left' }}>Name: {genre.name}</h3>
        <p>Description: {genre.description}</p>
      </div>
    ))}
  </div>
)}
    </div>
  );
};

export default MyComponent;
