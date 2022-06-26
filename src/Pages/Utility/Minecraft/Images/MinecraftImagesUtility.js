import { useState } from 'react';
import swamp from '../../../../Assets/Images/wild update swamp.png';
import SideNav from '../../../../GenericComponents/SideNav';
import '../../Utility.css';
import '../MinecraftUtility.css';
import HealthBar from './GenericComponents/HealthBar';
import './MinecraftImagesUtility.css';
import './GenericComponents/Generic.css';
import HungerBar from './GenericComponents/HungerBar';
import ArmorBar from './GenericComponents/ArmorBar';
import BubbleBar from './GenericComponents/BubbleBar';
import Hotbar from './GenericComponents/Hotbar';

function MinecraftImagesUtility (props) {
  const [health, setHealth] = useState(20);
  const [hunger, setHunger] = useState(20);
  const [armor, setArmor] = useState(0);
  const [air, setAir] = useState(0);
  const [hardcore, setHardcore] = useState(false);

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
        <div className='armor-container container'>
          <div className='input-title'>Armor</div>
          <input
            className='slider armor-slider'
            type='range'
            min='0'
            max='20'
            step='1'
            value={armor}
            onChange={(e) => setArmor(Number(e.target.value))}
          />
          <ArmorBar armor={armor} />
        </div>

        <div className='air-container container'>
          <div className='input-title'>Air</div>
          <input
            className='slider air-slider'
            type='range'
            min='0'
            max='20'
            step='1'
            value={air}
            onChange={(e) => setAir(Number(e.target.value))}
          />
          <BubbleBar air={air} />
        </div>

        <div className='healthbar-container container'>
          <div className='input-title'>Health</div>
          <input
            className='slider health-slider'
            type='range'
            min='0'
            max='20'
            step='1'
            value={health}
            onChange={(e) => setHealth(Number(e.target.value))}
          />
          <HealthBar health={health} hardcore={hardcore} />
        </div>

        <div className='hunger-container container'>
          <div className='input-title'>Hunger</div>
          <input
            className='slider hunger-slider'
            type='range'
            min='0'
            max='20'
            step='1'
            value={hunger}
            onChange={(e) => setHunger(Number(e.target.value))}
          />
          <HungerBar hunger={hunger} />
        </div>
      </div>

      <div className='hardcore-checkbox-container'>
        <input type='checkbox' className='hardcore-checkbox' value={hardcore} onChange={(e) => setHardcore(e.target.checked)} />
        Hardcore
      </div>

      <Hotbar armor={armor} air={air} health={health} hunger={hunger} hardcore={hardcore} />
    </div>
  );
}

export default MinecraftImagesUtility;
