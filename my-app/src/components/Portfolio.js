import React from 'react';
import pizza from '../images/pizza.png'
import school from '../images/school.jpg'


export const Portfolio = () => {

  return (
      <div className="portfolio">
          <h1 className="portfolio-header">Portfolio</h1>
        <div className="projects">
            <div className="pizza-div">
              <img className="pizza-pr" src={ pizza } alt="Preview of pizza ordering website" />
                <div className= "view-proj">
                  <a href="https://web-sprint-challenge-single-page-applications-three.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
                  <a href="https://github.com/pvaidehee/web-sprint-challenge-single-page-applications" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              <h5>Project done through Lambda School</h5>
                <p>Utilizes React, Routing, and Forms <br />
                Form is styled using Material-UI</p>  
            </div>
            <div className="wow-div">
              <img className="wow-pr" src={ school } alt="child with telescope"/>
                <div className= "view-proj">
                  <a href="https://school-in-the-cloud-backend.herokuapp.com/" target="_blank" rel="noopener noreferrer">View</a>
                  <a href="https://github.com/Build-Week-School-in-the-Cloud-Track/back-end" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              <h5>School in the Clouds- Backend</h5>
              <p>A app done through Lambda school build-week <br />Utilized SQLite, Cypress, Postgres and Javascript. </p>
            </div>
        </div>
      </div>
  );
}