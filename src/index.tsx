/* @refresh reload */
import {render} from 'solid-js/web';
import {Route, Router, Routes} from 'solid-app-router';

import IndexPage from '@pages/IndexPage';
import GeneratorPage from '@pages/GeneratorPage';

render(() => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={IndexPage}/>
        <Route path='/generator' element={GeneratorPage}/>
      </Routes>
    </Router>
  );
},
  document.getElementById('root') as HTMLElement,
);
