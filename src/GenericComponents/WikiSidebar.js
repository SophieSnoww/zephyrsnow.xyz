import wikipediaLogo from '../Assets/Images/wikipedia logo.png';
import { Link } from 'react-router-dom';
import './WikiSidebar.css';

function WikiSidebar (props) {
  return (
    <div className='wiki-sidebar'>
      <img src={wikipediaLogo} alt='Logo' className='sidebar-logo' />

      <div className='sidebar-text'>
        <div className='sidebar-title'>Wikiphyr</div>
        <div className='sidebar-subtitle'>The Free Infodump</div>
      </div>

      <div className='sidebar-links'>
        <Link to='/wiki'>Main page</Link>
        <Link to='/wiki/zephyr'>Zephyr</Link>
      </div>

      <div className='sidebar-whitespace' />
    </div>
  );
}

export default WikiSidebar;
