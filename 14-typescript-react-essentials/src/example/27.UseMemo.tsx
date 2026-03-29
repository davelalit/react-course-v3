import React, { useState, useMemo } from 'react';
const DataFilterer: React.FC<{ data: number[] }> = ({ data }) => {
  const [filter, setFilter] = useState(0);
// Expensive calculation (e.g., filtering a large array) is memoized
  const filteredData = useMemo(() => {
    console.log('Running expensive calculation...');
    return data.filter(item => item > filter);
  }, [data, filter]); // Re-runs only when 'data' or 'filter' changes
return (
    <div>
      <input
        type="number"
        value={filter}
        onChange={e => setFilter(Number(e.target.value))}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilterer;