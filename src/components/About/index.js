import React from 'react';
import Brett from '../../assets/images/brett.jpg';

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <div>
                <img id="avatar" src={Brett} alt="Brett Piper" />
                <div id="bio">
                    <p>
                        Welcome to my portfolio, a single-page application built using React.js.
                    </p> 
                    <p>
                        I am a web developer nearly finished with a bootcamp course through UNC-Chapel Hill. Bringing experience as a graphic designer, 
                        a web developer, and a client in need of a website update, my skills and knowledge are an asset to any team.
                    </p>
                    <p>
                        Please use the navigation links above to view samples of my web development work, download my resume, or contact me through the site.
                    </p>
                    <p>
                        The footer links below can help you connect with me via some of the social media platforms I use.
                    </p>
                </div>
            </div>
        </section >
    )
};

export default About;