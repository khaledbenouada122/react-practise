import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({prodlist}) => {
  return (
    <div >ProductList
        {prodlist.map((el) =>(
            <div key={el.id}>
              <br/>
              <Link to={'/products/${el.id}'}>
            <p>{el.name}</p><br/>
            <p>{el.desc}</p><br/>
            </Link>
            </div>
        ))}

    </div>
  )
}

export default Product