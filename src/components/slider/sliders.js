import React from 'react'
import sliderdatas from './sliderdata'

import Carousel from 'react-bootstrap/Carousel';
const Sliders = () => {
    return (
        <div>


        
            <Carousel >
                {sliderdatas.map((data)=>(
                    <Carousel.Item>
                    <img src={data.img}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
                
            </Carousel>





        </div>
    )
}

export default Sliders
