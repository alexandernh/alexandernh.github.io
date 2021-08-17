import React from 'react';
import './entry1.css';
// import CardItem from '../CardItem';

function Entry2() {
  return (
    <div className='entry'>
      <div className='entry__container'>
        <div className='entry__wrapper'>
          <div className='row' style={{borderBottom: '5px solid grey'}}>
              <div className='column1' style={{paddingTop: '2%'}}>
                <h1 style={{textAlign: 'center'}}>JPMorgan Chase & Co.</h1>
                <h2 style={{textAlign: 'center'}}>Software Engineer Intern</h2>
                <p style={{textAlign: 'center'}}>Summer 2021</p>              
              </div>
              <div className='column'>
                <h3 style={{paddingRight: '12%'}}>Created a self-service tool that allows business partners to create machine learned NER models, test them, and publish them into consumable APIs. APIs extract key entities and classify documents by type. Product is currently in production and is being used by three LOBs</h3>
              </div>
          </div>
          <div className='row' style={{borderBottom: '5px solid grey'}}>
              <div className='column1' style={{paddingTop: '8%'}}>
                <h1 style={{textAlign: 'center'}}>Charles Schwab</h1>
                <h2 style={{textAlign: 'center'}}>Software Engineer Intern</h2>
                <p style={{textAlign: 'center'}}>Summer 2020</p>              
              </div>
              <div className='column'>
                <h3 style={{paddingTop: '12%'}}>Developed and managed a product that provides an efficient way to review and compare Transmit Security Artifacts. Practiced Test Driven Development, followed S.O.L.I.D. Principles, and utilized the Angular framework as a developer. Created product's KBIs, Metrics, and Key Results and empathized with personas as a project manager.</h3>
              </div>
          </div>
          <div className='row'>
              <div className='column1' style={{paddingTop: '6%'}}>
                <h1 style={{textAlign: 'center'}}>L3Harris</h1>
                <h2 style={{textAlign: 'center'}}>Big-Data Engineer Co-Op</h2>
                <p style={{textAlign: 'center'}}>Summer & Fall 2019</p>              
              </div>
              <div className='column'>
                <h3 style={{paddingTop: '12%'}}>Worked on a team to complete a product that provides semantic analysis and named-entity recognition. Focused on the product’s UI/UX, data serialization and deserialization process, and CI/CD pipeline. Setup and hosted UI/UX meetings with the PO and presented the final product.</h3>
              </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Entry2;
