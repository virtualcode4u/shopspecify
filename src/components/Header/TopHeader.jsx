import React from 'react';
import USA from '../../assets/images/country/USA.png';
import UK from '../../assets/images/country/UK.png';
import GERMANY from '../../assets/images/country/GERMANY.png';
import TURKISH from '../../assets/images/country/TURKISH.png';

const AlertBar = () => {
  return (
    <>
        <div className="header-top">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-xxl-3 d-xxl-block d-none">
                        <div className="top-left-header">
                            <i className="iconly-Location icli text-white"></i>
                            <span className="text-white">1418 Riverwood Drive, CA 96052, US</span>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                        <div className="header-offer">
                            <div className="notification-slider">
                                <div>
                                    <div className="timer-notification">
                                        <h6><strong className="me-1">Welcome to Fastkart!</strong>Wrap new offers/gift
                                            every signle day on Weekends.<strong className="ms-1">New Coupon Code: Fast024
                                            </strong>

                                        </h6>
                                    </div>
                                </div>

                                <div>
                                    <div className="timer-notification">
                                        <h6>Something you love is now on sale!
                                            <a href="shop-left-sidebar.html" className="text-white">Buy Now
                                                !</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <ul className="about-list right-nav-about">
                            <li className="right-nav-list">
                                <div className="dropdown theme-form-select">
                                    <button className="btn dropdown-toggle" type="button" id="select-language"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={USA}
                                            className="img-fluid" alt=""/>
                                        <span>English</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0)" id="english">
                                                <img src={UK}
                                                    className="img-fluid" alt=""/>
                                                <span>English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0)" id="france">
                                                <img src={GERMANY}
                                                    className="img-fluid" alt=""/>
                                                <span>Germany</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0)" id="chinese">
                                                <img src={TURKISH}
                                                    className="img-fluid blur-up lazyload" alt=""/>
                                                <span>Turki</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="right-nav-list">
                                <div className="dropdown theme-form-select">
                                    <button className="btn dropdown-toggle" type="button" id="select-dollar"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>USD</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                                        aria-labelledby="select-dollar">
                                        <li>
                                            <a className="dropdown-item" id="aud" href="javascript:void(0)">AUD</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="eur" href="javascript:void(0)">EUR</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="cny" href="javascript:void(0)">CNY</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AlertBar