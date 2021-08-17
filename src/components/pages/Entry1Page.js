import React from 'react';
import '../../App.css';
import Entry1 from '../entries/entry1';
import Footer from '../Footer';

function componentDidMount() {
  window.scrollTo(0, 0)
}


export default function Entry1Page() {
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
       src="/images/computer.jpg"/>
      <h1 style={{color: 'white'}}>ENTRY 1</h1>
    </div>
    <Entry1/>
    <Footer/>
    </div>
    );
  }
