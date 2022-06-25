import struct from '../../Assets/Images/struct.jpg';
import SideNav from '../../GenericComponents/SideNav';
import './Utility.css';

function UtilityHomepage (props) {
  return (
    <div className='page utility-homepage'>
      <img src={struct} alt='' className='background-image' />

      <SideNav
        title='Utility Nav' pages={[
          {
            text: 'Back Home',
            link: '/'
          },
          {
            text: 'Minecraft Utility',
            link: '/utility/minecraft'
          }
        ]}
      />

      <div className='utility-page-text-container'>
        <div className='utility-page-text'>
          This is just a nav page. Use the navigation pane in the top left to go places.
        </div>
      </div>
    </div>
  );
}

export default UtilityHomepage;
