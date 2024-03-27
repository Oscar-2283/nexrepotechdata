import { useState } from 'react';
import './index.css';

export default function Search({ setQuery, setPage }: { setQuery: Function , setPage: Function }) {
  const [localQuery, setLocalQuery] = useState('');

  const handleLocalSearch = () => {
    setQuery(localQuery); 
    setPage(1);
  };

  return (
    <div>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search repositories..."
      />
      <button className='ml-5 p-2 bg-slate-500 hover:bg-slate-800 duration-300 rounded-xl' onClick={handleLocalSearch}>Search</button>
    </div>
  );
}
