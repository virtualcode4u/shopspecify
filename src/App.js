import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Register from './components/UserDetail/Register';
import SignIn from './components/UserDetail/SignIn';

const App =() => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Register/>}/>
        <Route path={'/signin'} element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
