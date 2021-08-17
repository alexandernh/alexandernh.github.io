import React from 'react';
import './Footer2.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer2() {
  return (
    <div className='footer-container2'>
      <section class='social-media2'>
        <div class='social-media-wrap2'>
          <div class='social-icons2'>
            <a href='www.linkedin.com/in/ho-alex'>        
                <i style={{ color: '#000', fontSize: '24px'}} class='fab fa-linkedin' />
              </a>
              <a href='https://www.youtube.com/channel/UC-8HmSdTmbH3br2xbJCnn_Q'>        
                <i style={{ color: '#000', fontSize: '24px'}} class='fab fa-youtube' />
              </a>
          </div>
          <p style={{paddingTop:'1%', color:'black', minWidth: '90px', wordWrap: 'normal'}}>Site made by Alex Ho in React</p>
        </div>
      </section>
    </div>
  );
}

export default Footer2;
