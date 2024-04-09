import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../MetaData'
import './Success.css'
const Success = () => {
  return (
    <>
    <MetaData title={`Payment Successful`}/>
    <div className=' section__p1'>
        <div className="success_box">
          {/* <img src="https://res.cloudinary.com/hateybazarey/image/upload/v1675609999/sucess_u7jhla.gif" alt="" height='100%'/> */}
          <div className='thanks_massage'>
            <h2 style={{color: 'green'}}>Thank you for Purchasing</h2>
            <p >Your Order Will Be Delivered Soon</p>
            <Link to='/shop' className='btnss more_shopping_btn' style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Continue Shopping</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Success