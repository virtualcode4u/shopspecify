import React from 'react';
import {Image, Row,Col, ul, li} from 'react-bootstrap';
import paylogo from '../../assets/images/payment/paylogo.png';

const FCopyright = () => {
  return (
    <div class="sub-footer section-small-space">
      <div class="reserve">
          <h6 class="text-content">©2022 Fastkart All rights reserved</h6>
      </div>

      <div class="payment">
          <img src={paylogo} alt=""/>
      </div>

      <div class="social-link">
          <h6 class="text-content">Stay connected :</h6>
          <ul>
              <li>
                  <a href="https://www.facebook.com/" target="_blank">
                      <i class="fa-brands fa-facebook-f"></i>
                  </a>
              </li>
              <li>
                  <a href="https://twitter.com/" target="_blank">
                      <i class="fa-brands fa-twitter"></i>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/" target="_blank">
                      <i class="fa-brands fa-instagram"></i>
                  </a>
              </li>
              <li>
                  <a href="https://in.pinterest.com/" target="_blank">
                      <i class="fa-brands fa-pinterest-p"></i>
                  </a>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default FCopyright