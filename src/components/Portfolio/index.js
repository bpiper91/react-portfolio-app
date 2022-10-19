import React from 'react';

function Portfolio() {
    const projects = [
        // need at least 6 projects
        {
            title: 'OutFoxed',
            image: require('../../assets/images/outfoxed.PNG'),
            deployedUrl: 'https://bpiper91.github.io/outfoxed/',
            githubRepo: 'https://github.com/bpiper91/outfoxed'
        },
        {
            title: 'To-Dine List',
            image: require('../../assets/images/to-dine.png'),
            deployedUrl: 'https://hidden-shelf-57015.herokuapp.com/',
            githubRepo: 'https://github.com/crisdege/to-dine-list'
        },
        {
            title: 'Team Profile Generator',
            image: require('../../assets/images/team.JPG'),
            deployedUrl: 'https://bpiper91.github.io/team-profile-generator/sample/',
            githubRepo: 'https://github.com/bpiper91/team-profile-generator'
        },
        {
            title: 'Note Taker',
            image: require('../../assets/images/notes.JPG'),
            deployedUrl: 'https://pacific-taiga-06621.herokuapp.com/',
            githubRepo: 'https://github.com/bpiper91/note-taker'
        },
        {
            title: 'Employee Tracker',
            image: require('../../assets/images/tracker.JPG'),
            deployedUrl: 'https://watch.screencastify.com/v/KH8jG145452zlKpOYZLu',
            githubRepo: 'https://github.com/bpiper91/employee-tracker'
        },
        {
            title: 'E-Commerce Back End',
            image: require('../../assets/images/e-commerce.PNG'),
            deployedUrl: 'https://youtu.be/BtaIy6KdVEc',
            githubRepo: 'https://github.com/bpiper91/e-commerce'
        },
    ];

    return (
        <section>
            <h2>
                Portfolio
            </h2>
            <div id="project-list" className="flex-row">
                {projects.map((project, i) => (
                    <div className='proj' id={`project-${i}`} key={`${i}`}>
                        <h3>{project.title}</h3>
                        <img className='proj-img' src={project.image} alt={project.title} />
                        <div className='flex-row'>
                            <span>
                                <a href={project.deployedUrl}>Deployed Application</a>
                            </span>
                            <span>
                                <a href={project.githubRepo}>GitHub Repo</a>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;