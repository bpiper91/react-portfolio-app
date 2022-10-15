import React from 'react';
import Brett from '../../assets';

function About() {
    return (
        <section>
            <img id="avatar" src={Brett} />
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