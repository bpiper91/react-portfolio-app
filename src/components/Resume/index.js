import React from 'react';
import ResumePDF from '../../assets/pdf/resume.pdf';

function Resume() {

    return (
        <section>
            <h2>
                Resume
            </h2>
            <h3>
                View/Download Resume
            </h3>
            <p>
                Please click the link below to view or download my resume as a PDF.
                </p>
            <p>
                <a href={ResumePDF}>Pre-Bootcamp Resume</a> (a resume including my web development experience will come soon)
            </p>
            <h3 id="proficiencies">
                Proficiencies
            </h3>
            <ul className='proficiencies'>
                <li>
                    HTML
                </li>
                <li>
                    CSS, including frameworks like Bootstrap and Bulma
                </li>
                <li>
                    JavaScript & JQuery
                </li>
                <li>
                    Node
                </li>
                <li>
                    Express
                </li>
                <li>
                    MySQL
                </li>
                <li>
                    Sequelize
                </li>
                <li>
                    NoSQL
                </li>
                <li>
                    React
                </li>
            </ul>
        </section>
    )
}

export default Resume;