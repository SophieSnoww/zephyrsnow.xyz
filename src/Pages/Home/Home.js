import TitleBar from '../../GenericComponents/Titlebar';
import '../../GenericComponents/MainTitlebar.css';
import leaves from '../../Assets/Images/leaves.jpg';
import zephyr from '../../Assets/Images/Zephyr.png';
import './Home.css';
import { motion } from 'framer-motion';
import { fade, fadeDown, rotateDown } from '../../Animations';

function HomePage (props) {
  return (
    <div className='page home-page'>
      <motion.img
        src={leaves}
        alt=''
        className='background-image blur-10'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={fade}
      />
      <TitleBar />

      <div className='page-content'>
        <motion.div
          className='page-text'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={fadeDown}
        >
          <div className='page-title'>Zephyr Snow</div>
          <div className='page-subtitle'>
            <span>18</span>
            <span>Any pronouns</span>
          </div>
          <div className='page-paragraph'>
            I'm a computer science major with too much free time. I spend most of that time either programming or playing games, which I tend to livestream!
          </div>
        </motion.div>
        <div className='page-img-container'>
          <motion.img
            src={zephyr}
            alt=''
            className='page-img'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={rotateDown}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
