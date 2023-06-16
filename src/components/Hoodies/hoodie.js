import React from 'react'
import { Container } from 'react-bootstrap'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import datas from './hoodiedata'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './hoodies.css'
const Hoodie = () => {
  return (
    <div className='m-4' id="#hoodie" >
      <h1>Hoodies</h1>
      <Container>
        <Row>
          {
            datas.map((data) => (
              <Col lg={4} md={6} xs={12} className=''  >
                <Card className='rounded hoodies my-3' style={{ width: '18rem' ,boxShadow:"5px 5px 5px rgb(183, 182, 182)" }}>
                  <Card.Img className='mx-auto' variant="top" src={data.img} style={{width:"10rem",height:"10rem"}}/>
                  <Card.Body>
                    <Card.Title>{data.heading}</Card.Title>
                    <Card.Text>
                      {data.desc}
                    </Card.Text>
                    <p>{data.price}</p>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }

        </Row>
      </Container>
    </div>
  )
}

export default Hoodie
