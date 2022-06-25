import { Link } from 'react-router-dom';

function TitleBar (props) {
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

  for (const page of pages) {
    pageElements.push(
      <Link to={page.link} className='title-bar-link'>{page.text}</Link>
    );
  }

  return (
    <div className='title-bar'>
      {pageElements}
    </div>
  );
}

export default TitleBar;
