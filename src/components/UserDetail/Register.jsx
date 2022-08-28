import React from 'react';
import { Container,Row,Col,Image, Card, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import signup from '../../assets/images/inner-page/signup.png';
import google from '../../assets/images/inner-page/google.png';
import facebook from '../../assets/images/inner-page/facebook.png';

const Register = () => {
  return (
    <>
        <section className='log-in-section'>
            <Container fluid className='lg w-100'>
                <Row>
                    <Col className='col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto'>
                        <div className='image-contain'>
                            <Image src={signup} alt='Register yourself' className='img-fluid'></Image>
                        </div>
                    </Col>
                    <Col className='col-xxl-4 col-xl-5 col-lg-6 me-auto'>
                        <Card style={{backgroundColor:'#f8f8f8', borderRadius:'10px', border:'none'}}>
                            <Card.Body>
                                <Card.Title as='h3'>Welcome To ShopSpecify</Card.Title>
                                <Card.Subtitle as='h5' className='text-muted'>Create New Account</Card.Subtitle>
                                <Card.Text>
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Control type='text' placeholder='Full Name'></Form.Control>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Form.Control type='email' placeholder='Email'></Form.Control>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Form.Control type='password' placeholder='Password'></Form.Control>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Form.Check type='checkbox' label='I agree with Terms and Privacy'></Form.Check>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                    <Button type='submit' variant='danger animation w-100'> Sign Up </Button>
                                                </Form.Group>
                                        </Form>
                                        <p as='h6'>or</p>
                                        <ListGroup className='flex'>
                                            <ListGroupItem className='mb-3'>
                                                <a href='https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin' className='btn google-button w-100' style={{backgroundColor:'#fff',flexWrap:'wrap'}}>
                                                    <Image src={google} className='blur-up lazyload'/> Sign up with Google
                                                </a>
                                            </ListGroupItem>
                                            <ListGroupItem className='mb-3'>
                                                <a href='https://www.facebook.com/' className='btn google-button w-100' style={{backgroundColor:'#fff',flexWrap:'wrap'}}>
                                                    <Image src={facebook} className='blur-up lazyload'/> Sign up with Facebook
                                                </a>
                                            </ListGroupItem>
                                        </ListGroup>
                                        <hr/>
                                        <p as='h4'>Already have an account? <a href='/signin' style={{textDecoration:'none'}}><br/>Log In</a></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Register