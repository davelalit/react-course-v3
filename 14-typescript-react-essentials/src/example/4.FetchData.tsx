import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.slice(0, 5).map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default DataFetcher;