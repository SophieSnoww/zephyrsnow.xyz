import Bubble from './Bubble';

function BubbleBar (props) {
  const bubbles = [];

  for (let i = 2; i < 22; i += 2) {
    if (props.air > i || props.air === i) {
      bubbles.push(
        <Bubble value={2} />
      );
    } else if (props.air === i - 1) {
      bubbles.push(
        <Bubble value={1} />
      );
    } else {
      bubbles.push(
        <Bubble value={0} />
      );
    }
  }

  return (
    <div className={`air-bar bar ${props.disableGreenscreen ? '' : 'greenscreen'}`}>
      {bubbles}
    </div>
  );
}

export default BubbleBar;
