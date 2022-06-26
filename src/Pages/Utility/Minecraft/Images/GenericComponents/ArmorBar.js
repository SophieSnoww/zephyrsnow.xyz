import Armor from './Armor';

function ArmorBar (props) {
  const armor = [];

  for (let i = 2; i < 22; i += 2) {
    if (props.armor === 0) {
      armor.push(
        <Armor value={-1} />
      );
    } else if (props.armor > i || props.armor === i) {
      armor.push(
        <Armor value={2} />
      );
    } else if (props.armor === i - 1) {
      armor.push(
        <Armor value={1} />
      );
    } else {
      armor.push(
        <Armor value={0} />
      );
    }
  }

  return (
    <div className={`armor-bar bar ${props.disableGreenscreen ? '' : 'greenscreen'}`}>
      {armor}
    </div>
  );
}

export default ArmorBar;
