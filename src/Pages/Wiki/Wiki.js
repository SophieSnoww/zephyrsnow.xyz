// import TitleBar from '../../GenericComponents/Titlebar';
// import '../../GenericComponents/MainTitlebar.css';
import wikipediaLogo from '../../Assets/Images/wikipedia logo.png';
import { useState } from 'react';
import './Wiki.css';

function WikiPage (props) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedText, setSelectedText] = useState('Select a page!');

  function toggleOptions () {
    setShowOptions(!showOptions);
  }

  function goToPage () {
    switch (selectedText) {
      case 'Select a page!':
        break;
      case 'Zephyr':
        window.location.pathname = '/wiki/zephyr';
    }
  }

  return (
    <div className='page wiki-page'>
      <div className='logo-text'>
        <div className='logo-title'>WikiphyR</div>
        <div className='logo-subtitle'>The Free Infodump</div>
      </div>
      <img src={wikipediaLogo} className='main-logo' />
      <div className='selection-container'>
        <div
          className='selection-box'
          style={{
            overflow: showOptions ? 'visible' : 'hidden'
          }}
          onClick={() => toggleOptions()}
        >
          <div className='selection-text'>{selectedText}</div>
          <div className='selection-options'>
            <div className='selection-option' onClick={() => { toggleOptions(); setSelectedText('Select a page!'); }}>Select a page!</div>
            <div className='selection-option' onClick={() => { toggleOptions(); setSelectedText('Zephyr'); }}>Zephyr</div>
          </div>
        </div>
        <div className='search-button material-icons' onClick={() => goToPage()}>search</div>
      </div>
    </div>
  );
}

export default WikiPage;
