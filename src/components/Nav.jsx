import React from 'react';
import SearchBar from './SearchBar.jsx';
import icono from './iconoweather.png'
import n from './nav.module.css'
import {Link} from 'react-router-dom'


function Nav({onSearch}) {
  return (
    <div className={n.contenedor}>
      <Link to='/'>
      <span className={n.a}>
        <img className={n.img} src={icono} width={55} alt='img not found'/> 
      WeatherApp
      </span>
      </Link>
      <div className={n.about}>
      <Link to= '/about'>
      <span className={n.a}>About</span>  
      </Link>
      </div>
      <div className={n.SearchBar}>
      <SearchBar onSearch={onSearch}/> 
      </div>
    </div>
  );
};

export default Nav;
