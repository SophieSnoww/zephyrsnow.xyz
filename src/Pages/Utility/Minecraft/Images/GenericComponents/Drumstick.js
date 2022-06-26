import fullStick from '../Assets/stick_full.png';
import halfStick from '../Assets/stick_half.png';
import emptyStick from '../Assets/stick_empty.png';

function Drumstick (props) {
  let image;

  if (props.value === 2) {
    image = fullStick;
  } else if (props.value === 1) {
    image = halfStick;
  } else {
    image = emptyStick;
  }

  return (
    <img src={image} alt='' className='icon' />
  );
}

export default Drumstick;
