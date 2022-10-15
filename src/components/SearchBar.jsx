import React, { useState } from "react";
import b from './searchbar.module.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('') 
  return (
    <form onSubmit={(e) => {
    e.preventDefault();
      onSearch(city);
    }}>
      <div className={b.busqueda}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        className={b.input}
        onChange={e => setCity(e.target.value)}
      />
      <input className={b.button} type="submit" value="Agregar"  />
      </div>
    </form>
  );
}

