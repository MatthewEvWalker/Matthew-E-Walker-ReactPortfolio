import { Link } from 'react-router-dom';
import './index.scss';
import logoS from '../../assets/images/logo-s.png';

const Sidebar = () => {
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt="logo "/>
            <img src={logoS} alt="logo "/>

        </Link>
    </div>
}
export default Sidebar;