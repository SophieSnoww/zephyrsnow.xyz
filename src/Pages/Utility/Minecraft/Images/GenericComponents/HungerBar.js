import Drumstick from './Drumstick';

function HungerBar (props) {
  const sticks = [];

  for (let i = 2; i < 22; i += 2) {
    if (props.hunger > i || props.hunger === i) {
      sticks.push(
        <Drumstick value={2} />
      );
    } else if (props.hunger === i - 1) {
      sticks.push(
        <Drumstick value={1} />
      );
    } else {
      sticks.push(
        <Drumstick value={0} />
      );
    }
  }

  return (
    <div className={`hunger-bar bar ${props.disableGreenscreen ? '' : 'greenscreen'}`}>
      {sticks}
    </div>
  );
}

export default HungerBar;
