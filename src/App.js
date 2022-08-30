import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import ForgotPassword from './components/UserDetail/ForgotPassword';
import Register from './components/UserDetail/Register';
import SignIn from './components/UserDetail/SignIn';

const App =() => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/signin'} element={<SignIn/>} />
        <Route path={'/forgot-pswd'} element={<ForgotPassword/>}/>
      </Routes>
    </>
  );
}

export default App;
