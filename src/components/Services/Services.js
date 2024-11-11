
import React from 'react'
import './Services.css'
import { servicesLst } from '../../utils/ServicesData' 

const Services = () => {
  return (
    <div className='section-services'>
        <h2>Services</h2>
        <div className='container grid grid-three-cools'>
            {servicesLst.map((each,index)=>{
                return (
                    <div key={index} className='service-item'>
                        {each.icon}
                        <h2>{each.h}</h2>
                        <p>{each.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services