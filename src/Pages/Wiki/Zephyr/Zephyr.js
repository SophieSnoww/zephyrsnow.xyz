import '../WikiPage.css';
import '../Wiki.css';
import WikiInfobox from '../../../GenericComponents/WikiInfobox';
import zeph from '../../../Assets/Images/Zephyr.png';
import WikiTOC from '../../../GenericComponents/WikiTOC';

function Zephyr (props) {
  return (
    <div className='wiki-page-content'>
      <div className='wiki-page-title'>Zephyr Snow</div>

      <div className='wiki-page-text'>
        <div className='wiki-header'>
          <div className='wiki-header-left'>
            <div className='wiki-header-text'>
              <p><b>Zephyr Snow</b></p>
            </div>
            <WikiTOC
              items={[
              ]}
            />
          </div>
          <WikiInfobox
            title='Zephyr Snow'
            img={zeph}
            imgSubtitle=''
            info={[
              // ['Born', 'Zephyr Snow, unknown'],
              // ['Died', 'Unknown']
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Zephyr;
