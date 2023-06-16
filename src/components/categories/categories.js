import React from 'react'
import datas from './Categorydata';
import Bg from './category.css'
const Categories = () => {
  return (
    <div className='d-flex align-elements-center justify-content-around' id='categories'>
      {
        datas.map((data)=>(
          <div className="my-3" style={{background:"red"}}>
              <a href={data.id}><h1 >{data.Name}</h1></a>
               <img src={data.img} alt=''/>
          </div>
           
        ))
      }
    </div>
  )
}

export default Categories
