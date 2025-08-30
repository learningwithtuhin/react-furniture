import React from 'react'
import SectionTitleCenter from './SectionTitleCenter'
import CategorySection from './CategorySection'

const Category = () => {
  return (
    <div className='category-sec'>
<div className='container'>
  <SectionTitleCenter
title="Shop by Category" 
subtitle="Browse furniture by space, need or style"
></SectionTitleCenter>
<CategorySection/>
</div>
    </div>
  )
}

export default Category