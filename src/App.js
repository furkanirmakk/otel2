import { BrowserRouter, Route, Routes,  } from 'react-router-dom';

import Anasayfa from './component/Anasayfa';
import Iletisim from './component/Iletisim';
import Odalarimiz from './component/odalarimiz';
import StandartOda from './component/standartOda';
import SuitOda from './component/SuitOda'; 
  
function App() {

  
  return (

    <div>



    < BrowserRouter >
      <div>
        <Routes>
          <Route path='/' element={<Anasayfa />} />
          
          <Route path='/iletisim' element={<Iletisim />} />
          <Route path='/odalarimiz' element={<Odalarimiz />} />
          <Route path='/standartOda' element={<StandartOda />} />
          <Route path='/suitOda' element={<SuitOda />} />
        </Routes>
      </div>
    </BrowserRouter >
</div>
  );
}

export default App;