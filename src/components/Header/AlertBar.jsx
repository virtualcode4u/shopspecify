import React from 'react'
import { Row,Col } from 'react-bootstrap'

const AlertBar = () => {
  return (
    <>
    <header className='pd-md-4 pb-0'>
        <div className='header-top'>
            <div className='container-fluid-lg'>
                <Row>
                    <Col className='col-xxl-3 d-xxl-block d-none'>
                    <span className="text-white">1418 Riverwood Drive, CA 96052, US</span>
                    </Col>
                </Row>
            </div>
        </div>
    </header>
    </>
  )
}

export default AlertBar