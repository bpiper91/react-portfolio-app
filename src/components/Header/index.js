import React, { useEffect } from 'react';

function Header(props) {
    // destructure props for clarity
    const {
        navSelection,
        setNavSelection
    } = props;

    // update page title in browser tab when page changes
    useEffect(() => {
        document.title = `${navSelection} | Brett Piper`;
    });

    return (
        <header className="header-row">
            <div className="header-title">
                <h1>
                    <a href="/">Brett Piper</a>
                </h1>
                <p>
                    A portfolio using React.js
                </p>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <nav>
                <ul className="nav-row">
                    <li className={`nav-item ${navSelection === 'Portfolio' && 'navActive'}`}>
                        <a href="#portfolio" onClick={() => setNavSelection('Portfolio')}>Portfolio</a>
                    </li>
                    <li key="about" className={`nav-item ${navSelection === 'About' && 'navActive'}`}>
                        <a href="#about" onClick={() => setNavSelection('About')}>About Me</a>
                    </li>
                    <li key="resume" className={`nav-item ${navSelection === 'Resume' && 'navActive'}`}>
                        <a href="#resume" onClick={() => setNavSelection('Resume')}>Resume</a>
                    </li>
                    <li key="contact" className={`nav-item ${navSelection === 'Contact' && 'navActive'}`}>
                        <a href="#contact" onClick={() => setNavSelection('Contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;