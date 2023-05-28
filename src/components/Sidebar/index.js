import { NavLink, Link } from 'react-router-dom';
import './Sidebar.scss';
import logoMW from '../../assets/images/MW-logo_thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoMW} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink> 

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faClipboardCheck} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/matthew-ev-walker/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>

                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/MatthewEvWalker/'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>

                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://discord.gg/gdaS6Be7'
                >
                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;