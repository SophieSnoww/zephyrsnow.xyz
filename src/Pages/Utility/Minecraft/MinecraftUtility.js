import swamp from '../../../Assets/Images/wild update swamp.png';
import SideNav from '../../../GenericComponents/SideNav';
import '../Utility.css';
import './MinecraftUtility.css';

function MinecraftUtilityHomepage (props) {
  return (
    <div className='page minecraft-utility-homepage'>
      <img src={swamp} alt='' className='background-image blur-10' />

      <SideNav
        title='Utility Nav' pages={[
          {
            text: 'Back Home',
            link: '/'
          },
          {
            text: 'Image Utility',
            link: '/utility/minecraft/images'
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

export default MinecraftUtilityHomepage;
