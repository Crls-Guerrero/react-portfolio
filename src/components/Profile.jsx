import { ReactComponent as IconDeveloperBackground } from "../svg/developer-background.svg";
import "../style/Profile.css";

function Curriculum(){
    window.open("https://drive.google.com/file/d/15CYH7jskF8ho7PIy3cgErwAxgglXq-KX/view?usp=sharing","_blank")
}

function Profile(){
    return(
        <div className="about">
            <div className="about-me">
                <h2>Hi!, I'm
                    <span> C</span>a
                    <span>r</span>
                    <span>l</span>o
                    <span>s</span>
                </h2>
                <p>Front-End Developer.</p>
                <button onClick={Curriculum}>Curriculum Vitae</button>
            </div>
            <IconDeveloperBackground className="icon-dev"/>
            
        </div>
    );
}
export default Profile;