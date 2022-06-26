import fullHeart from '../Assets/heart_full.png';
import fullHardcoreHeart from '../Assets/heart_full_hardcore.png';
import halfHeart from '../Assets/heart_half.png';
import halfHardcoreHeart from '../Assets/heart_half_hardcore.png';
import emptyHeart from '../Assets/heart_empty.png';

function Heart (props) {
  let image;

  if (props.value === 2) {
    image = props.hardcore ? fullHardcoreHeart : fullHeart;
  } else if (props.value === 1) {
    image = props.hardcore ? halfHardcoreHeart : halfHeart;
  } else {
    image = emptyHeart;
  }

  return (
    <img src={image} alt='' className='icon' />
  );
}

export default Heart;
