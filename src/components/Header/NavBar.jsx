import React from 'react'
import theme1 from '../../assets/images/theme/theme1.jpg';
import theme2 from '../../assets/images/theme/theme2.jpg';
import theme3 from '../../assets/images/theme/theme3.jpg';
import theme4 from '../../assets/images/theme/theme4.jpg';
import theme5 from '../../assets/images/theme/theme5.jpg';


const NavBar = () => {
  return (
  <div className="container-fluid-lg">
    <div className="row">
        <div className="col-12">
            <div className="header-nav">
                <div className="header-nav-left">
                    <button className="dropdown-category">
                        <i data-feather="align-left"></i>
                        <span>All Categories</span>
                    </button>

                    <div className="category-dropdown">
                        <div className="category-title">
                            <h5>Categories</h5>
                            <button type="button" className="btn p-0 close-button text-content">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <ul className="category-list">
                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" alt="" />
                                    <h6>Vegetables & Fruit</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Organic Vegetables</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Potato & Tomato</a>
                                            </li>
                                            <li>
                                                <a href="#">Cucumber & Capsicum</a>
                                            </li>
                                            <li>
                                                <a href="#">Leafy Vegetables</a>
                                            </li>
                                            <li>
                                                <a href="#">Root Vegetables</a>
                                            </li>
                                            <li>
                                                <a href="#">Beans & Okra</a>
                                            </li>
                                            <li>
                                                <a href="#">Cabbage & Cauliflower</a>
                                            </li>
                                            <li>
                                                <a href="#">Gourd & Drumstick</a>
                                            </li>
                                            <li>
                                                <a href="#">Specialty</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="list-2">
                                        <div className="category-title-box">
                                            <h5>Fresh Fruit</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Banana & Papaya</a>
                                            </li>
                                            <li>
                                                <a href="#">Kiwi, Citrus Fruit</a>
                                            </li>
                                            <li>
                                                <a href="#">Apples & Pomegranate</a>
                                            </li>
                                            <li>
                                                <a href="#">Seasonal Fruits</a>
                                            </li>
                                            <li>
                                                <a href="#">Mangoes</a>
                                            </li>
                                            <li>
                                                <a href="#">Fruit Baskets</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg" alt="" />
                                    <h6>Beverages</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box w-100">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Energy & Soft Drinks</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Soda & Cocktail Mix</a>
                                            </li>
                                            <li>
                                                <a href="#">Soda & Cocktail Mix</a>
                                            </li>
                                            <li>
                                                <a href="#">Sports & Energy Drinks</a>
                                            </li>
                                            <li>
                                                <a href="#">Non Alcoholic Drinks</a>
                                            </li>
                                            <li>
                                                <a href="#">Packaged Water</a>
                                            </li>
                                            <li>
                                                <a href="#">Spring Water</a>
                                            </li>
                                            <li>
                                                <a href="#">Flavoured Water</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg" alt=""/>
                                    <h6>Meats & Seafood</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Meat</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Fresh Meat</a>
                                            </li>
                                            <li>
                                                <a href="#">Frozen Meat</a>
                                            </li>
                                            <li>
                                                <a href="#">Marinated Meat</a>
                                            </li>
                                            <li>
                                                <a href="#">Fresh & Frozen Meat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="list-2">
                                        <div className="category-title-box">
                                            <h5>Seafood</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Fresh Water Fish</a>
                                            </li>
                                            <li>
                                                <a href="#">Dry Fish</a>
                                            </li>
                                            <li>
                                                <a href="#">Frozen Fish & Seafood</a>
                                            </li>
                                            <li>
                                                <a href="#">Marine Water Fish</a>
                                            </li>
                                            <li>
                                                <a href="#">Canned Seafood</a>
                                            </li>
                                            <li>
                                                <a href="#">Prawans & Shrimps</a>
                                            </li>
                                            <li>
                                                <a href="#">Other Seafood</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg" alt=""/>
                                    <h6>Breakfast & Dairy</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Breakfast Cereals</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Oats & Porridge</a>
                                            </li>
                                            <li>
                                                <a href="#">Kids Cereal</a>
                                            </li>
                                            <li>
                                                <a href="#">Muesli</a>
                                            </li>
                                            <li>
                                                <a href="#">Flakes</a>
                                            </li>
                                            <li>
                                                <a href="#">Granola & Cereal Bars</a>
                                            </li>
                                            <li>
                                                <a href="#">Instant Noodles</a>
                                            </li>
                                            <li>
                                                <a href="#">Pasta & Macaroni</a>
                                            </li>
                                            <li>
                                                <a href="#">Frozen Non-Veg Snacks</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="list-2">
                                        <div className="category-title-box">
                                            <h5>Dairy</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Milk</a>
                                            </li>
                                            <li>
                                                <a href="#">Curd</a>
                                            </li>
                                            <li>
                                                <a href="#">Paneer, Tofu & Cream</a>
                                            </li>
                                            <li>
                                                <a href="#">Butter & Margarine</a>
                                            </li>
                                            <li>
                                                <a href="#">Condensed, Powdered Milk</a>
                                            </li>
                                            <li>
                                                <a href="#">Buttermilk & Lassi</a>
                                            </li>
                                            <li>
                                                <a href="#">Yogurt & Shrikhand</a>
                                            </li>
                                            <li>
                                                <a href="#">Flavoured, Soya Milk</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg" alt=""/>
                                    <h6>Frozen Foods</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box w-100">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Noodle, Pasta</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Instant Noodles</a>
                                            </li>
                                            <li>
                                                <a href="#">Hakka Noodles</a>
                                            </li>
                                            <li>
                                                <a href="#">Cup Noodles</a>
                                            </li>
                                            <li>
                                                <a href="#">Vermicelli</a>
                                            </li>
                                            <li>
                                                <a href="#">Instant Pasta</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg" alt=""/>
                                    <h6>Biscuits & Snacks</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Biscuits & Cookies</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Salted Biscuits</a>
                                            </li>
                                            <li>
                                                <a href="#">Marie, Health, Digestive</a>
                                            </li>
                                            <li>
                                                <a href="#">Cream Biscuits & Wafers</a>
                                            </li>
                                            <li>
                                                <a href="#">Glucose & Milk Biscuits</a>
                                            </li>
                                            <li>
                                                <a href="#">Cookies</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="list-2">
                                        <div className="category-title-box">
                                            <h5>Bakery Snacks</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Bread Sticks & Lavash</a>
                                            </li>
                                            <li>
                                                <a href="#">Cheese & Garlic Bread</a>
                                            </li>
                                            <li>
                                                <a href="#">Puffs, Patties, Sandwiches</a>
                                            </li>
                                            <li>
                                                <a href="#">Breadcrumbs & Croutons</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="onhover-category-list">
                                <a href="#" className="category-name">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg" alt=""/>
                                    <h6>Grocery & Staples</h6>
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>

                                <div className="onhover-category-box">
                                    <div className="list-1">
                                        <div className="category-title-box">
                                            <h5>Grocery</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Lemon, Ginger & Garlic</a>
                                            </li>
                                            <li>
                                                <a href="#">Indian & Exotic Herbs</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Vegetables</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Fruits</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="list-2">
                                        <div className="category-title-box">
                                            <h5>Organic Staples</h5>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Organic Dry Fruits</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Dals & Pulses</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Millet & Flours</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Sugar, Jaggery</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Masalas & Spices</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Rice, Other Rice</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Flours</a>
                                            </li>
                                            <li>
                                                <a href="#">Organic Edible Oil, Ghee</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header-nav-middle">
                    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                        <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                            <div className="offcanvas-header navbar-shadow">
                                <h5>Menu</h5>
                                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown dropdown-mega">
                                        <a className="nav-link dropdown-toggle ps-xl-2 ps-0"
                                            href="#" data-bs-toggle="dropdown">Home</a>

                                        <div className="dropdown-menu dropdown-menu-2 dropdown-image">
                                            <div className="dropdown-column">
                                                <a className="dropdown-item" href="index.html">
                                                    <img src={theme1} className="img-fluid"
                                                        alt=""/>
                                                    <span>Kartshop</span>
                                                </a>

                                                <a className="dropdown-item" href="index-2.html">
                                                    <img src={theme2} className="img-fluid"
                                                        alt=""/>
                                                    <span>Sweetshop</span>
                                                </a>

                                                <a className="dropdown-item" href="index-3.html">
                                                    <img src={theme3} className="img-fluid"
                                                        alt=""/>
                                                    <span>Organic</span>
                                                </a>

                                                <a className="dropdown-item" href="index-4.html">
                                                    <img src={theme4} className="img-fluid"
                                                        alt=""/>
                                                    <span>Supershop</span>
                                                </a>

                                                <a className="dropdown-item" href="index-5.html">
                                                    <img src={theme5} className="img-fluid"
                                                        alt=""/>
                                                    <span>Slicktech</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown">Shop</a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="shop-category-slider.html">Shop
                                                    Category Slider</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="shop-category.html">Shop
                                                    Category Sidebar</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="shop-banner.html">Shop Banner</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                                    Sidebar</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="shop-list.html">Shop List</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="shop-right-sidebar.html">Shop
                                                    Right Sidebar</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="shop-top-filter.html">Shop Top
                                                    Filter</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown">Product</a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="product-4-image.html">Product
                                                    4 Image</a>
                                            </li>
                                            <li>
                                                <a href="product-bottom-thumbnail.html"
                                                    className="dropdown-item">Product Bottom Thumbnail</a>
                                            </li>
                                            <li>
                                                <a href="product-left-thumbnail.html"
                                                    className="dropdown-item">Product Left Thumbnail</a>
                                            </li>
                                            <li>
                                                <a href="product-left.html" className="dropdown-item">Product
                                                    Left</a>
                                            </li>
                                            <li>
                                                <a href="product-right-thumbnail.html"
                                                    className="dropdown-item">Product Right Thumbnail</a>
                                            </li>
                                            <li>
                                                <a href="product-slider.html" className="dropdown-item">Product
                                                    Slider</a>
                                            </li>
                                            <li>
                                                <a href="product-sticky.html" className="dropdown-item">Product
                                                    Sticky</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega">
                                        <a className="nav-link dropdown-toggle ps-xl-2 ps-0"
                                            href="#" data-bs-toggle="dropdown">Mega Menu</a>

                                        <div className="dropdown-menu dropdown-menu-2 row g-3">
                                            <div className="dropdown-column col-xl-3">
                                                <h5 className="dropdown-header">Daily Vegetables</h5>
                                                <a className="dropdown-item" href="shop-left-sidebar.html">Beans &
                                                    Brinjals</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli
                                                    & Cauliflower</a>

                                                <a href="shop-left-sidebar.html" className="dropdown-item">Chilies,
                                                    Garlic</a>

                                                <a className="dropdown-item"
                                                    href="shop-left-sidebar.html">Vegetables & Salads</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Gourd,
                                                    Cucumber</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Herbs &
                                                    Sprouts</a>

                                                <a href="demo-personal-portfolio.html"
                                                    className="dropdown-item">Lettuce
                                                    & Leafy</a>
                                            </div>

                                            <div className="dropdown-column col-xl-3">
                                                <h5 className="dropdown-header">Baby Tender</h5>
                                                <a className="dropdown-item" href="shop-left-sidebar.html">Beans &
                                                    Brinjals</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli
                                                    & Cauliflower</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Chilies,
                                                    Garlic</a>

                                                <a className="dropdown-item"
                                                    href="shop-left-sidebar.html">Vegetables & Salads</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Gourd,
                                                    Cucumber</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Potatoes
                                                    & Tomatoes</a>

                                                <a href="shop-left-sidebar.html" className="dropdown-item">Peas &
                                                    Corn</a>
                                            </div>

                                            <div className="dropdown-column col-xl-3">
                                                <h5 className="dropdown-header">Exotic Vegetables</h5>
                                                <a className="dropdown-item" href="shop-left-sidebar.html">Asparagus
                                                    & Artichokes</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Avocados
                                                    & Peppers</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli
                                                    & Zucchini</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Celery,
                                                    Fennel & Leeks</a>

                                                <a className="dropdown-item" href="shop-left-sidebar.html">Chilies &
                                                    Lime</a>
                                            </div>

                                            <div className="dropdown-column dropdown-column-img col-3"></div>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-list.html">Blog List</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="404.html">404</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="about-us.html">About Us</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="cart.html">Cart</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="checkout.html">Checkout</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="compare.html">Compare</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="faq.html">Faq</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="order-success.html">Order
                                                    Success</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="order-tracking.html">Order
                                                    Tracking</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="otp.html">OTP</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="search.html">Search</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="user-dashboard.html">User
                                                    Dashboard</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-2" href="contact-us.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-nav-right">
                    <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                        <i data-feather="zap"></i>
                        <span>Deal Today</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default NavBar