import React from 'react';

const FHeader = () => {
  return (
    <div className="service-section">
    <div className="row g-3">
        <div className="col-12">
            <div className="service-contain">
                <div className="service-box">
                    <div className="service-image">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg" alt=""/>
                    </div>

                    <div className="service-detail">
                        <h5>Every Fresh Products</h5>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-image">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg" alt=""/>
                    </div>

                    <div className="service-detail">
                        <h5>Free Delivery For Order Over $50</h5>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-image">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg" alt=""/>
                    </div>

                    <div className="service-detail">
                        <h5>Daily Mega Discounts</h5>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-image">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg" alt=""/>
                    </div>

                    <div className="service-detail">
                        <h5>Best Price On The Market</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FHeader