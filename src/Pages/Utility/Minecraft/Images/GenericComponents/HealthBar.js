import Heart from './Heart';

function HealthBar (props) {
  const hearts = [];

  for (let i = 2; i < 22; i += 2) {
    if (props.health > i || props.health === i) {
      hearts.push(
        <Heart value={2} hardcore={props.hardcore} />
      );
    } else if (props.health === i - 1) {
      hearts.push(
        <Heart value={1} hardcore={props.hardcore} />
      );
    } else {
      hearts.push(
        <Heart value={0} hardcore={props.hardcore} />
      );
    }
  }

  return (
    <div className={`health-bar bar ${props.disableGreenscreen ? '' : 'greenscreen'}`}>
      {hearts}
    </div>
  );
}

export default HealthBar;
