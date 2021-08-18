import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
          <a href='https://www.linkedin.com/in/ho-alex'>        
                <i style={{ color: '#000', fontSize: '24px'}} class='fab fa-linkedin' />
              </a>
              <a href='https://www.youtube.com/channel/UC-8HmSdTmbH3br2xbJCnn_Q'>        
                <i style={{ color: '#000', fontSize: '24px'}} class='fab fa-youtube' />
              </a>
          </div>
          <p style={{paddingTop:'1%', color:'black'}}>Site made by Alex Ho in React</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
