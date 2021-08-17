import React from 'react';
import '../../App.css';
import Entry1 from '../entries/entry1';
import Footer2 from '../Footer2';

function componentDidMount() {
  window.scrollTo(0, 0)
}


export default function Services() {
  componentDidMount();
  return (
    <div>
    <Entry1/>
    {/* <div className='services-container'>
      <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '2'}} 
       src="/images/sandiegopotato.jpg"/>
      <h1 style={{color: 'white'}}>ABOUT</h1>
    </div> */}
    {/* <Entry1/> */}
    <Footer2 />
    </div>
    );
  }
