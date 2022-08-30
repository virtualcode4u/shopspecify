import React from 'react';
import {Image, Row,Col, ul, li} from 'react-bootstrap';
import paylogo from '../../assets/images/payment/paylogo.png';

const FCopyright = () => {
  return (
    <div className="sub-footer section-small-space">
      <div className="reserve">
          <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
      </div>

      <div className="payment">
          <img src={paylogo} alt=""/>
      </div>

      <div className="social-link">
          <h6 className="text-content">Stay connected :</h6>
          <ul>
              <li>
                  <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                  </a>
              </li>
              <li>
                  <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                  </a>
              </li>
              <li>
                  <a href="https://in.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-pinterest-p"></i>
                  </a>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default FCopyright