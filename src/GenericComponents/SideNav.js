import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav (props) {
  const pages = props.pages
    ? props.pages
    : [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'Links',
          link: '/links'
        },
        {
          text: 'Characters',
          link: '/links'
        },
        {
          text: 'Utilities',
          link: '/utility'
        }
      ];
  const pageElements = [];

  const [open, setOpen] = useState(false);

  for (const page of pages) {
    pageElements.push(
      <Link to={page.link} className='side-nav-link'>{page.text}</Link>
    );
  }

  const toggle = (e) => {
    setOpen(!open);
  };

  return (
    <div className={`side-nav ${open ? '' : 'inactive'}`}>
      <div className='side-nav-content'>
        <div className={`side-nav-button open-nav-button symbol ${open ? 'hidden' : ''}`} onClick={(e) => toggle(e)}>menu</div>
        <div className={`side-nav-button close-nav-button symbol ${open ? '' : 'hidden'}`} onClick={(e) => toggle(e)}>close</div>
        <div className='side-nav-title'>{props.title}</div>
        {pageElements}
      </div>
    </div>
  );
}

export default SideNav;
