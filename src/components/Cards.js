import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <img style={{objectFit: 'cover',
          //  opacity: '0.2',
          height: '75%',
          width: "40%"}} 
          src="/images/sandiegopotato.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Cards;
