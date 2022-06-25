import { useState } from 'react';
import swamp from '../../../../Assets/Images/wild update swamp.png';
import SideNav from '../../../../GenericComponents/SideNav';
import '../../Utility.css';
import '../MinecraftUtility.css';
import HealthBar from './GenericComponents/HealthBar';
import './MinecraftImagesUtility.css';

function MinecraftImagesUtility (props) {
  const [health, setHealth] = useState(20);

  return (
    <div className='page minecraft-image-utility'>
      <img src={swamp} alt='' className='background-image blur-10' />

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

      <div className='minecraft-image-utility-content'>
        <div className='healthbar-container'>
          <input className='slider' type='range' min='0' max='20' step='1' value={health} onChange={(e) => setHealth(Number(e.target.value))} />
          <HealthBar health={health} />
        </div>
      </div>
    </div>
  );
}

export default MinecraftImagesUtility;
