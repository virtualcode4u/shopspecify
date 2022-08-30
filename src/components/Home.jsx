import React from 'react';
import Index from './Header/Index';
import FIndex from './Footer/FIndex';
import NewsLetter from './NewsLetter/NewsLetter';
import Main from './Content/Main';

const Home = () => {
  return (
    <>
        <Index/>
        <Main/>
        <NewsLetter/>
        <FIndex/>
    </>
  )
}

export default Home