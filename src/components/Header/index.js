import React, { useEffect } from 'react';

function Header(props) {
    const {
        navSelection,
        setNavSelection,
    } = props;

    useEffect(() => {
        document.title = `${navSelection} | Brett Piper`;
    });

    return (
        <header>
            <h2>
                <a href="/">Brett Piper</a>
            </h2>
            <p>
                A portfolio using React.js
            </p>
            <nav>
                <ul className="flex-row">
                    <li className={navSelection === 'Portfolio' && 'navActive'}>
                        <a href="#about" onClick={() => setNavSelection('Portfolio')}>Portfolio</a>
                    </li>
                    <li className={navSelection === 'About' && 'navActive'}>
                        <a href="#about" onClick={() => setNavSelection('About')}>About Me</a>
                    </li>
                    <li className={navSelection === 'Resume' && 'navActive'}>
                        <a href="#about" onClick={() => setNavSelection('Resume')}>Resume</a>
                    </li>
                    <li className={navSelection === 'Contact' && 'navActive'}>
                        <a href="#contact" onClick={() => setNavSelection('Contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;