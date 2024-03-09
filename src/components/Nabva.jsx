import React, { useState } from "react";
import "../style/Navbar.css";
import { ReactComponent as IconSvg } from "../svg/codepen.svg";
import { ReactComponent as IconGithub} from "../svg/github.svg";

function codepen(){
    window.open("https://codepen.io/Crls-Guerrero/pens/public","_blank")
}
function github(){
    window.open("https://github.com/Crls-Guerrero","_blank")
}

function Navbar(){
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return(        
            <div className={`header ${showMenu ? 'show-header' : ''}`}>
                <div className="header-title">
                    <h1 className="link">Crls</h1>
                </div>
                <div className={`header-links ${showMenu ? 'show-links' : ''}`}>                    
                    <nav className="nav">
                        <a href="#a">Home</a>
                        <a href="#a">Skills</a>
                        <a href="#a">Projects</a>
                        <a href="#a">Contact</a>
                    </nav>
                </div>    
                <div className={`header-icons ${showMenu ? 'show-icons' : ''}`}>
                        <IconSvg className="codepen-ico" onClick={codepen}/>
                        <IconGithub className="github-ico" onClick={github}/>
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