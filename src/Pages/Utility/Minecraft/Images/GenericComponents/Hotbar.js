import hotbar from '../Assets/hotbar.png';
import xp from '../Assets/xp_empty.png';
import ArmorBar from './ArmorBar';
import BubbleBar from './BubbleBar';
import HealthBar from './HealthBar';
import HungerBar from './HungerBar';

function Hotbar (props) {
  return (
    <div className='hotbar-container'>
      <div className='bars'>
        <ArmorBar armor={props.armor} disableGreenscreen />
        <BubbleBar air={props.air} disableGreenscreen />
        <HealthBar health={props.health} disableGreenscreen hardcore={props.hardcore} />
        <HungerBar hunger={props.hunger} disableGreenscreen />
      </div>
      <img src={xp} alt='' className='xp' />
      <img src={hotbar} alt='' className='hotbar' />
    </div>
  );
}

export default Hotbar;
