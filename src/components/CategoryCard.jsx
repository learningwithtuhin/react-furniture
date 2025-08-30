import React from 'react'
import { Link, NavLink } from 'react-router'

const CategoryCard = (props) => {
  return (
    <Link to='/shop'>
         <div className='category-card'>
<div className='catgry-img'>
    <img src={props.icon} alt="" />
</div>
<div className='catgry-txt'>
    <h5>{props.title}</h5>
    <p>{props.productCount}</p>
</div>
    </div>
    </Link>
   
  )
}

export default CategoryCard