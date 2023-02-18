import React from 'react'
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
      <header id="header" class="d-flex align-items-center">
      <div class="container d-flex flex-column align-items-center">
  
        <h1><img src={logo} /></h1>
        <h2>We're working hard to improve our website and we'll ready soon</h2>
        <div class="countdown d-flex justify-content-center">
            <h1>Coming Soon</h1>
        </div>
  
        <div class="subscribe">
          <h4>Follow us on</h4>
        </div>
  
        <div class="social-links text-center">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/shopspecify" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="https://www.youtube.com/@shopspecify" class="youtube"><i class="bi bi-youtube"></i></a>
          <a href="#" class="telegram"><i class="bi bi-telegram"></i></a>
          <a href="#" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
        </div>
  
      </div>
    </header>
    )
}

export default Header