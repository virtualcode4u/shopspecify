import React from 'react';
import { Container } from 'react-bootstrap';
import FHeader from './FHeader';
import FMenu from './FMenu';
import FCopyright from './FCopyright';

const FIndex = () => {
  return (
    <footer className="section-t-space">
        <div className="container-fluid-lg">
        <FHeader/>
        <FMenu/>
        <FCopyright/>
      </div>  
    </footer>
  )
}

export default FIndex