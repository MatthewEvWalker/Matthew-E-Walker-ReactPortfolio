import { NavLink, Link } from 'react-router-dom';
import './Sidebar.scss';
import logoMW from '../../assets/images/MW-logo_thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClipboardCheck, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

 return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoMW} alt="logo"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ""} >
            {/* <ul> */}
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} />
            </NavLink> 

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faClipboardCheck} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
            {/* </ul> */}
            <NavLink onClick={() => setShowNav(false)} className="close-link" >
                <FontAwesomeIcon   icon={faClose} size="2x"  className="close-icon"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/matthew-ev-walker/'
                >
                    <FontAwesomeIcon icon={faLinkedin}  />
                </a>

                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/MatthewEvWalker/'
                >
                    <FontAwesomeIcon icon={faGithub}  />
                </a>

                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://discord.gg/BhDY8FMBZP'
                >
                    <FontAwesomeIcon icon={faDiscord}  />
                </a>
            </li>
        </ul>

        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} size="4x" className='hamburger-icon' color="#0077B6"/>
    </div>
)
}

export default Sidebar;