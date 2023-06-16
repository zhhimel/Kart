import React from 'react'
import sliderdatas from './sliderdata'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const Sliders = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center p-4 my-5 rounded' style={{ backgroundColor: 'lightblue', width:'1000px', height: '500px' }}>
            <Carousel >
                {sliderdatas.map((data) => (
                    
                    <Carousel.Item  >
                        
                            <Row className='align-items-center ' >
                                <Col xl={7} l={6} md={5} s={4}>
                                    <h3 className='my-4' style={{ color: 'black' }}>{data.heading}</h3>
                                    <p style={{ color: 'black' }}>{data.desciption}</p>
                                    
                                    <Button variant="warning" size='lg'>{data.price}</Button>
                                </Col>
                                <Col xl={5} l={5} md={3} s={3}>
                                    <img src={data.img} className=' w-100 ' style={{}} alt='' />
                                </Col>
                            </Row>
                    </Carousel.Item>

                ))}
            </Carousel>
        </Container>
    )
}

export default Sliders
