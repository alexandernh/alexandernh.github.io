import React from 'react';
import './entry1.css';
// import CardItem from '../CardItem';

function Entry1() {
  return (
    <div className='entry'>
      <div className='entry__container'>
        <div className='entry__wrapper1'>
          <div className='row'>
          <h1 style={{fontSize:"500%"}}>TL;DR: I'M A MUSIC GENRE GEEK, PLASTIC DISC THROWER, AND FAN OF HIGH CARB FOODS</h1>
                {/* <h3>My intentions with this website is to give a glimpse of what my interests are and the kind of person that I am. Let's get into it >:)</h3> */}
          </div>
          <div className='row'>
              <div className='column1' style={{paddingRight: '5%'}}>
                <img style={{ width:"100%", height: '100%'}} src="/images/alexprofile.jpg"/>
              </div>
              <div className='column'>
                <h2></h2>
                <h3 style={{color: '#696969'}}>
                  My name's Alex! I will be graduating December 2021 with a bachelors in computer science at The University of Texas at Dallas.
                  Throughout undergrad, I've held position as the UTD Ultimate Frisbee Club A-Team Captain and Sports Coordinator of the Filipino Student Association.
                </h3>
                <h3 style={{color: '#696969', paddingTop: '15px'}}>
                  I've spent my time working at places like JPMorgan Chase & Co. and Charles Schwab. Majority of my time during those summers was spent
                  managing and developing internal projects for the corp. where I was able to practice design thinking.
                </h3>
                <h3 style={{color: '#696969', paddingTop: '15px'}}>
                  Moving forward, I hope to join a corp. that embraces each and every one of their colleagues and emphasizes the importance of living a life worth living.
                </h3>
              </div>
          </div>
            {/* <div className='row1'>

              <div className='column' style={{paddingRight: '5%'}}>
                <h1>I also take mediocre photos.</h1>
                <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </h3>
              </div>
              <div className='column1'>
                <img style={{ width:"100%", height: '100%'}} src="/images/computer.jpg"/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  );
}

export default Entry1;
