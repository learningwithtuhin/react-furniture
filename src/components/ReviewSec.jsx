import React from 'react'
import SectionTitleCenter from './SectionTitleCenter'
import TestimonialList from './TestimonialList'
import reviewLamp from "../assets/images/review-lamp.png"
import reviewLampTwo from "../assets/images/review-lamp2.png"


const ReviewSec = () => {
  return (
    <div className='rvw-sec'>
        <div className='container'>
<SectionTitleCenter
title="Hear It from Our Happy Customers" 
subtitle="Discover how our furniture is transforming homes and lives."
></SectionTitleCenter>
<TestimonialList/>
        </div>
        <div className="review-left-img">
   <img src={reviewLamp} alt="Review Lamp" />
</div>
<div className="review-right-img">
   <img src={reviewLampTwo} alt="Review Lamp" />
</div>
        
    </div>
  )
}

export default ReviewSec