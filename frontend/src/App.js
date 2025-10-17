import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/items').then(res => setItems(res.data));
  }, []); 

  const addItem = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5001/api/items', { name });
    setItems([...items, res.data]);
    setName('');
  };

  return (
    <div style={{padding: '2rem'}}>
      <form onSubmit={addItem}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button type='submit'>Add New Item</button>
      </form>
      <ul>
        {items.map(item => <li key={item._id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
