import fullHeart from '../Assets/heart_full.png';
import halfHeart from '../Assets/heart_half.png';
import emptyHeart from '../Assets/heart_empty.png';

function Heart (props) {
  let image;

  if (props.value === 2) {
    image = fullHeart;
  } else if (props.value === 1) {
    image = halfHeart;
  } else {
    image = emptyHeart;
  }

  return (
    <img src={image} alt='' className='icon' />
  );
}

export default Heart;
