import React from 'react';
import Index from './Header/Index';
import FIndex from './Footer/FIndex';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div>
        <Index/>
        <NewsLetter/>
        <FIndex/>
    </div>
  )
}

export default Home