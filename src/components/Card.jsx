import React from 'react';
import { Link } from 'react-router-dom';
import s from './card.module.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={s.contenedor}>
        <div className={s.row}>
            <button className={s.btn} onClick={onClose} >X</button>
        </div>
        <div className={s.cardbody}>
          <Link to={`/ciudad/${id}`}>
          <h3 className={s.cardtitle}>{name}</h3>
          </Link>
            <div className={s.minmax}>
              <p>Min:</p>
              <p> {min}°</p>
            </div>
            <div className={s.minmax}>
              <p>Max:</p>
              <p>{max}°</p>
            </div>
            <div className={s.minmax}>
              <img className={s.iconoClima} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
            </div>
          
        </div>
      </div>
    );
};
