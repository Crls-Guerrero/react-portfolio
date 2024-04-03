import React, { useState } from "react";
import { ReactComponent as IconLogoCode } from "../svg/logo-code.svg";
import "../style/Navbar.css";

function Curriculum(){
    window.open("https://drive.google.com/file/d/15CYH7jskF8ho7PIy3cgErwAxgglXq-KX/view?usp=sharing","_blank")
}

function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return(        
            <div className={`header ${showMenu ? 'show-header' : ''}`}>
                <div className="header-title">
                    <IconLogoCode className="logo-code"/>
                    <p>Portfolio</p>
                </div>
                <div className={`header-links ${showMenu ? 'show-links' : ''}`}>                    
                    <nav className="nav">
                        <a href="#a">Home</a>
                        <a href="#a">Skills</a>
                        <a href="#a">Projects</a>
                        <button onClick={Curriculum}>Curriculum</button>
                    </nav>
                </div>              
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`line ${showMenu ? 'line-open' : ''}`}></div>
                    <div className={`line ${showMenu ? 'line-open' : ''}`}></div>
                    <div className={`line ${showMenu ? 'line-open' : ''}`}></div>
                </div>
            </div>
    );
}
export default Navbar;