import React from 'react';
import './entry1.css';
// import CardItem from '../CardItem';

function Entry4() {
  return (
    <div className='entry' style={{paddingBottom:'1500px'}}>
        <div style={{position: 'sticky', top: '10px'}}>
        <img style={{
            objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
    //    position: 'inherit',
       zIndex: '0',
       position: 'sticky', top: '10px'}} 
       src="/images/alex.jpg"/>
        </div>
    </div>
  );
}

export default Entry4;
