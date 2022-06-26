import fullBubble from '../Assets/bubble_full.png';
import halfBubble from '../Assets/bubble_half.png';
import emptyBubble from '../Assets/empty.png';

function Bubble (props) {
  let image;

  if (props.value === 2) {
    image = fullBubble;
  } else if (props.value === 1) {
    image = halfBubble;
  } else {
    image = emptyBubble;
  }

  return (
    <img src={image} alt='' className='icon' />
  );
}

export default Bubble;
