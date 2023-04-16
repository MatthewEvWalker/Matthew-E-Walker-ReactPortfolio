import { NavLink, Link } from 'react-router-dom';
import './Sidebar.scss';
import logoMW from '../../assets/images/MW-logo_thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoMW} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="$4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/">
                <FontAwesomeIcon icon={faUser} color="$4d4d4e"/>
            </NavLink>            
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/">
                <FontAwesomeIcon icon={faEnvelope} color="$4d4d4e"/>
            </NavLink>
        </nav>
    </div>
)

export default Sidebar;