import React from 'react';
import Brett from '../../assets/images/brett.jpg';

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <img id="avatar" src={Brett} alt="Brett Piper" />
            <div id="bio">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    )
};

export default About;