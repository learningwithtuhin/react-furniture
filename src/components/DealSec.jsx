import React from 'react'
import SectionTitleCenter from './SectionTitleCenter'
import DealsList from './DealsList'

const DealSec = () => {
  return (
    <div className='deals-sec'>
         <SectionTitleCenter
title="Deal Of The Day" 
subtitle="Don’t miss out on today’s exclusive picks!"
></SectionTitleCenter>
        <div className='container'>
            <DealsList/>
        </div>
       
    </div>
  )
}

export default DealSec