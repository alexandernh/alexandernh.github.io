import React from 'react';
import '../../App.css';
import Entry3 from '../entries/entry3';
import Footer from '../Footer';

function componentDidMount() {
  window.scrollTo(0, 0)
}


export default function Entry3Page() {
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
       src="/images/SanDiegoPotato.jpg"/>
      <h1 style={{color: 'white'}}>ENTRY 3</h1>
    </div>
    <Entry3/>
    <Footer/>
    </div>
    );
  }
