import React from 'react';
import '../../App.css';
import Footer2 from '../Footer2';

function componentDidMount() {
  window.scrollTo(0, 0)
}

export default function Products() {
  componentDidMount();
  return (
  <div>
    <div className='services-container2'>
      <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/alex.jpg"/>
      <div className='hero-btns' style={{paddingBottom: '20%'}}>
      <a href="/images/resume.pdf" download="AlexHoResume">
        {/* <ButtonSubscribe
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          RESUME
        </ButtonSubscribe> */}
        <button style={{background: 'transparent', paddingTop: '3px', paddingBottom: '3px',paddingInline: '10px', color:'white', borderLeftColor: 'white', borderRightColor: 'white', cursor: 'pointer', borderBlockColor: 'white', borderColor: 'white', borderStyle: 'solid'}}>MY RESUME</button>
        </a>
      </div>    
    </div>
    <Footer2 />
    {/* <p style={{textAlign: 'center'}}>p.s. photography has always been on the backburner for me and so</p> */}
    {/* <p style={{textAlign: 'center'}}>I'm grateful for this channel to show a glimpse of what has been in stock.</p> */}
  </div>
  );
}
