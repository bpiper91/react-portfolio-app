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
            title: 'Second Project',
            image: require('../../assets/images/brett.jpg'),
            deployedUrl: 'http://github.com/bpiper91',
            githubRepo: 'http://github.com/bpiper91'
        },
    ];

    return (
        <section>
            <h2>
                Portfolio
            </h2>
            <div id="project-list" className="flex-row">
                {projects.map((project, i) => (
                    <div id={`project-${i}`}> 
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <p>
                            <a href={project.deployedUrl}>Deployed Application</a>
                        </p>
                        <p>
                            <a href={project.githubRepo}>GitHub Repo</a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;