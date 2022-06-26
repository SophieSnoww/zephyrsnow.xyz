import fullArmor from '../Assets/armor_full.png';
import halfArmor from '../Assets/armor_half.png';
import emptyArmor from '../Assets/armor_empty.png';
import empty from '../Assets/empty.png';

function Armor (props) {
  let image;

  if (props.value === 2) {
    image = fullArmor;
  } else if (props.value === 1) {
    image = halfArmor;
  } else if (props.value === 0) {
    image = emptyArmor;
  } else {
    image = empty;
  }

  return (
    <img src={image} alt='' className='icon' />
  );
}

export default Armor;
