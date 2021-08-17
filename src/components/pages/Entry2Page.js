import React from 'react';
import '../../App.css';
import Entry2 from '../entries/entry2';
import Footer from '../Footer';

function componentDidMount() {
  window.scrollTo(0, 0)
}


export default function Entry2Page() {
  componentDidMount();
  return (
    <div>
    <div className='services-container'>
      <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/LoganBike.jpg"/>
      <h1 style={{color: 'white'}}>ENTRY 2</h1>
    </div>
    <Entry2/>
    <Footer/>
    </div>
    );
  }
