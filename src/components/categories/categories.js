import React from 'react'
import datas from './Categorydata';
import './category.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Categories = () => {
  return (
    <Container  id='categories' style={{}}>
      <Row className='m-4'>
        <Col className='d-flex justify-content-around'>
          {
            datas.map((data) => (
             <Col xs={3}  className='d-flex align-items-center justify-content-around m-2 rounded'  style={{backgroundColor:data.bg,padding:"15px"}}>
                <a href={data.id} style={{textDecoration:"none",color:"black"}} ><h1 >{data.Name} </h1></a>
                <img src={data.img} alt='' className='d-block' style={{height:"50px",width:"50px"}} /> 
             </Col>
            ))
          }
        </Col>

      </Row>
    </Container>
  )
}

export default Categories
