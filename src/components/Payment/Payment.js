

import React from 'react'
import './Payment.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Payment = () => {

  const user = useSelector(state=>state.user)

  const {name,email,phone,adults,children}=user 

  return (
    <div className='section-payment'>
        <div className='container grid grid-two--cols'>
          
          <div className='payment-1--div'>
              <h2>{name}</h2>
              <p>{email}</p>
              <p>+91 - {phone}</p>
              <p>{adults} Adults and {children} children</p>
          </div>

          <div className='payment-2--div'>
          <i class="fa-solid fa-circle-check"></i>
          <div>
            <h2>Order Complete</h2>
            <p>Have any questions?</p>
            <p><Link to='/'>Contact us</Link></p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Payment