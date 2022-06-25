import { Route, Routes, useLocation } from 'react-router-dom';
import MinecraftImagesUtility from './Pages/Utility/Minecraft/Images/MinecraftImagesUtility';
import MinecraftUtilityHomepage from './Pages/Utility/Minecraft/MinecraftUtility';
import UtilityHomepage from './Pages/Utility/Utility';
import HomePage from './Pages/Home/Home';
import './AppContainer.css';
import LinksPage from './Pages/Links/Links';

function App () {
  const location = useLocation();

  return (
    <div className='app-container'>
      <Routes location={location} key={location.pathname}>
        <Route path='/links' element={<LinksPage />} />
        <Route path='/characters' element={<div>characters</div>} />

        <Route path='/utility/minecraft/images' element={<MinecraftImagesUtility />} />

        <Route path='/utility/minecraft' element={<MinecraftUtilityHomepage />} />
        <Route path='/utility' element={<UtilityHomepage />} />

        <Route path='/*' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
