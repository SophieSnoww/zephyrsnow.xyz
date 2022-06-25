import Heart from './Heart';
import './Generic.css';

function HealthBar (props) {
  const hearts = [];

  for (let i = 2; i < 22; i += 2) {
    if (props.health > i || props.health === i) {
      hearts.push(
        <Heart value={2} />
      );
    } else if (props.health === i - 1) {
      hearts.push(
        <Heart value={1} />
      );
    } else {
      hearts.push(
        <Heart value={0} />
      );
    }
  }

  return (
    <div className='health-bar bar greenscreen'>
      {hearts}
    </div>
  );
}

export default HealthBar;
