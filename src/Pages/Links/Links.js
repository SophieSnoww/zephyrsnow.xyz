import TitleBar from '../../GenericComponents/Titlebar';
import '../../GenericComponents/MainTitlebar.css';
import { motion } from 'framer-motion';
import image from '../../Assets/Images/rainy leaves 2.jpg';
import { fade, fadeDown } from '../../Animations';
import './Links.css';

function LinksPage (props) {
  const links = [
    {
      name: 'Discord',
      link: 'https://discord.gg/AmqvmdMYWE'
    },
    {
      name: 'Telegram',
      link: 'https://t.me/zephyrsnoww'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/ZephyrSnoww'
    },
    {
      name: 'Github',
      link: 'https://github.com/ZephyrSnoww'
    },
    {
      name: 'Twitch',
      link: 'https://www.twitch.tv/zephyrsnoww'
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/channel/UC0ILzqgKK98lezPZzIrziEg'
    }
  ];

  const linkElements = [];

  for (const link of links) {
    linkElements.push(
      <a href={link.link} className={`link ${link.name.toLowerCase()}-link`}>{link.name}</a>
    );
  }

  return (
    <div className='page links-page'>
      <motion.img
        src={image}
        className='background-image blur-5'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={fade}
      />
      <TitleBar />

      <motion.div
        className='links-body'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={fadeDown}
      >
        <div className='links-container'>
          {linkElements}
        </div>
      </motion.div>
    </div>
  );
}

export default LinksPage;
