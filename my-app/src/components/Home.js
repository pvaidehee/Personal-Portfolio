import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button';

import Me from '../images/Vee1.JPG'
import html from '../images/HTML.png'
import css from '../images/css.webp'
import js from '../images/JavaScript.png'
import rct from '../images/React.png'
import rdx from '../images/Redux.png'
import node from '../images/nodejs.png'


export const Home = (props) => {

    return (
        <>
        <div className="container">
            <img className="me" src={ Me } alt="Vaidehee Patel" />
                <div className="about-div">
                    <h3>Welcome</h3>
                    <h2>Full Stack <br /> Web Developer</h2>
                    <p>Get to know me</p>
                    <Button className="home-button" variant="outlined">
                        <a href="mailto: pvaidehee@gmail.com">Contact Me</a>
                    </Button>
                </div>
        </div>
        <div className="ido">
                        <img className="html" src= {html} alt="HTML logo" />
                        <img className="css" src= {css} alt="CSS logo" />
                        <img className="js" src= {js} alt="Javascript logo" />
                        <img className="react" src= {rct} alt="React logo" />
                        <img className="redux" src= {rdx} alt="Redux logo"/>
                        <img className="node" src= {node} alt="Node logo" />
                    </div>
        <div className="aboutme">
            <h4>About Me</h4>
                <div className="about-container">
                    <p>My name is Vaidehee Patel, I’m a 25 year old living in Fayetteville,North Carolina. Bloodline from Gujarat (North India), born and bought up in Hyderabad, Telangana (South India), been in States as an International Student and am now here on a Green Card.
                    <br /><br />
                    I graduated high school in 2012 and followed up with an year in Aeronautical Engineering at GITAMS University in 2013 in India. I quit GITAMS and came visiting my mom's family in the States in 2013 end of year and loved the education system here, so I applied as an Internation student at Methodist University, Fayetteville, NC. Studied there for 2.5 years and had to drop-out. Then in December, 2018 I got married and recieved my Green Card. Now, I am currently working my way through the Full Stack Web Development course through Lambda School which has been such an amazing experience and makes me super excited for my future in web development.
                    <br /><br />
                    My initial love for coding came at an early age when my dad started teaching me computers and mathematics from grade 5. Since then I have participated in many computer coding competition and won a few of them too. But, from grade 7 I was all inclined towards sports and wanted to build my future in it. And when I was here as an international student I dis-located my ankle and had to giveup my future in sports and continued on my path of 2nd dream in coding. Although I seconded the thought of pursuing a career in coding (or really understood that it could be a career with intrest and fun) I gave it my all in pursuing it. I am so excited to gain an endorsement through Lambda School and begin a career that not only provides security for myself, but is also something that I enjoy.
                    <br/> <br/>
                    My skillset now includes HTML/CSS, React, React Redux, Context API, Cypress, Jest, Node.js, C language as well as Python.</p>
                    
                </div>
        </div>
        <div className="footer">
            <p>Follow me on social media:</p>
            <br /><br />
            <div className="footer-socials">
                <SocialIcon url="https://github.com/pvaidehee/" />
                <SocialIcon url="https://www.linkedin.com/in/pvaidehee1995/" />
            </div>
        </div>
        </>
    )
}