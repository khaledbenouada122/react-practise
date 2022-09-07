import React from 'react'
import { Link } from 'react-router-dom';


const Navbare = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contactes</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/products'>Product</Link>
    </div>
  )
}

export default Navbare