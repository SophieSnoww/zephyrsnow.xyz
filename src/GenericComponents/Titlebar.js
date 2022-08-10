import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../Animations';

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
          text: 'Wiki',
          link: '/wiki'
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
    <motion.div
      className='title-bar'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={fadeUp}
    >
      {pageElements}
    </motion.div>
  );
}

export default TitleBar;
