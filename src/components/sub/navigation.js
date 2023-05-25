import React,{useState} from "react"
import "./navigation.css"
import { Link } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  


const toggleNavigation=()=>{

    setIsOpen(!isOpen);
    };
    return (
        <div>
        {!isOpen ? (
            <button className="hamburger" onClick={toggleNavigation}>
            &#9776;
            </button>
        ) : null}
        <nav className={`menu ${isOpen ? "show" : ""}`}>
            {isOpen ? (
            <button className="close" onClick={toggleNavigation}>
                X
            </button>
            ) : null}
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Portfolio</Link>
            </li>
            <li>
                <Link to="/skills">Resume</Link>
            </li>
            <li>
                <Link to="/educations">Contacts</Link>
            </li>
            <li>
                <Link to="/about">About me</Link>
            </li>
            </ul>
        </nav>
        </div>

      );

};
export default Navigation