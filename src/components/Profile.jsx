import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Codepen } from "../svg/codepen.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import { ReactComponent as DeveloperBackground } from "../svg/developer-background.svg";
import "../style/Profile.css";

function Profile(){
    return(
        <div className="about">
            <div className="about-me">
                <p>Hey, I'm</p>
                <h2>Carlos</h2>
                <h2>Guerrero</h2>
                <p>Estudent of Software Engineer - <span>Web Developer</span>.</p>
                <div className="about-links">
                    <Linkedin className="icons-linkedin"/>
                    <Github className="icons-github" />
                    <Codepen className="icons-codepen"/>
                </div>                
            </div>
            <div className="logo">
               <DeveloperBackground className="developer"/>  
            </div>
        </div>
    );
}
export default Profile;