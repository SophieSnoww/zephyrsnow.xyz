import { Route, Routes } from 'react-router-dom';
import './WikiPage.css';
import './Wiki.css';
import WikiSidebar from '../../GenericComponents/WikiSidebar';
import WikiTitlebar from '../../GenericComponents/WikiTitlebar';
import Zephyr from './Zephyr/Zephyr';

function WikiRouter (props) {
  return (
    <div className='page wiki-page wiki-subpage'>
      <WikiSidebar />

      <div className='page-body'>
        <WikiTitlebar />

        <Routes>
          <Route path='/zephyr' element={<Zephyr />} />
        </Routes>
      </div>
    </div>
  );
}

export default WikiRouter;
