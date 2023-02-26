import React from 'react'
import logo from '../../assets/images/logo.png';
import Footer from './Footer';

const Header = () => {
    return (
      <>
        <div id="main-wrapper">
          <div class="container-fluid px-0">
            <div class="row g-0 min-vh-100">
              <div class="col-lg-7 d-flex flex-column bg-dark">
                <div class="container py-5 px-4 px-lg-5 my-auto">
                  <div class="row text-center">
                    <div class="col-12 mx-auto mb-4"> 
                      <a class="logo" href="/" title="Zoon"> <img src={logo} alt="ShopSpecify" height={40}/> </a> 
                    </div>
                    <div class="col-12 mx-auto">
                      <h1 class="text-9 bg-primary d-inline-block fw-700 rounded px-3 py-2 mb-4">Coming Soon!</h1>
                      <h2 class="text-15 text-white fw-600 mb-4">Our new website is on its way.</h2>
                    </div>
                    <div class="col-md-9 col-xl-8 mx-auto">
                        <p class="text-5 text-light mb-3">Get notified when we launch.</p>
                      <div class="subscribe-form">
                        <form class="form-dark" action="/" role="form" method="post">
                          <div class="input-group">
                            <input type="email" id="subscribe-form-email" name="subscribe-form-email" class="form-control border-dark required" required placeholder="Enter Your Email Here.."/>
                            <button id="subscribe-form-submit" name="subscribe-form-submit" class="btn btn-primary px-4 shadow-none" type="submit"><span class="d-none d-sm-block">Notify Me</span><span class="text-4 d-block d-sm-none"><i class="fas fa-arrow-right"></i></span></button>
                          </div>
                        </form>
                        <div class="subscribe-form-result mt-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container pb-2 px-3">
                  <div class="row text-white">
                    <div class="col-sm-6 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
                  <span class="me-2"><i class="fas fa-info-circle"></i></span><a class="text-white" data-bs-toggle="modal" data-bs-target="#about" href="#">About Us</a>
                </div>
                  <div class="col-sm-6 col-md-4 d-flex align-items-center justify-content-center mt-2 mt-sm-0">
                  {/* <span class="me-2"><i class="fas fa-phone-alt"></i></span>(+91) 11-2142-566 */}
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-end mt-2 mt-md-0">
                  <ul class="social-icons social-icons-light">
                    <li class="social-icons-whatsapp"><a data-bs-toggle="tooltip" href="/" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a></li>
                    <li class="social-icons-linkedin"><a data-bs-toggle="tooltip" href="https://www.linkedin.com/company/shopspecify" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
                    <li class="social-icons-youtube"><a data-bs-toggle="tooltip" href="https://www.youtube.com/@shopspecify" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
                    <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/shopspecify" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                    <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="https://www.facebook.com/ShopSpecify-101576442879566/" target="_blank" title="Facebook"><i class="fab fa-facebook"></i></a></li>
                    <li class="social-icons-instagram"><a data-bs-toggle="tooltip" href="https://www.instagram.com/shopspecify" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-flex flex-column text-center bg-dark-2">
            <div class="container my-auto py-5 pt-lg-4 pb-lg-2">
              <div class="row mx-0">
                <div class="col-11 col-lg-10 mx-auto">
                  <h3 class="mb-3 text-white fw-600">Contact Us</h3>
                  <p class="text-white-50 mb-4">We launch our new website soon. For Customer Support and Query, Send us a note.</p>           
                    <form id="contact-form" class="form-dark" action="php/mail.php" method="post">
                      <div class="mb-3">
                        <input id="name" name="name" type="text" class="form-control border-2" placeholder="Enter Your Name" required />
                      </div>
                      <div class="mb-3">
                        <input id="email" name="email" type="email" class="form-control border-2" placeholder="Enter Your Email" required />
                      </div>
                      <div class="mb-3">
                        <textarea id="form-message" name="form-message" class="form-control border-2" rows="2" placeholder="Enter Your Query" required ></textarea>
                      </div>
                      <div class="d-grid mt-4">
                        <button id="submit-btn" class="btn btn-primary" type="submit">Send Message</button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
              <Footer/>
          </div>
        </div>
      </div>
    </div>
      </>
    )
}

export default Header