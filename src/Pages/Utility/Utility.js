import { motion } from 'framer-motion';
import { fade, fadeDown } from '../../Animations';
import struct from '../../Assets/Images/struct.jpg';
import SideNav from '../../GenericComponents/SideNav';
import './Utility.css';

function UtilityHomepage (props) {
  return (
    <div className='page utility-homepage'>
      <motion.img
        src={struct}
        alt=''
        className='background-image'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={fade}
      />

      <SideNav
        title='Utility Nav' pages={[
          {
            text: 'Back Home',
            link: '/'
          },
          {
            text: 'Minecraft Utility',
            link: '/utility/minecraft'
          }
        ]}
      />

      <motion.div
        className='utility-page-text-container'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={fadeDown}
      >
        <div className='utility-page-text'>
          This is just a nav page. Use the navigation pane in the top left to go places.
        </div>
      </motion.div>
    </div>
  );
}

export default UtilityHomepage;
