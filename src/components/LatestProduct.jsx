import React from 'react'
import ProductList from './productList'
import SectionTitleCenter from './SectionTitleCenter'
import { Link } from "react-router-dom";
import LatestproductList from './LatestproductList';

const LatestProduct = () => {
  return (
   <div className='best-seller latest-sec'>
        <div className='container'>
            <div className='row best-row'>
                <div className='col-md-8'>
<SectionTitleCenter
title="Latest Products" 
subtitle="Discover our newest arrivals, handpicked just for you."
></SectionTitleCenter>
                </div>
               <div className="col-md-4">
      <div className="viewall-btn-wrap">
        <Link to="/shop" className="viewall-btn">
          <span>View all</span> <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
    </div>
            </div>
            <div>
                <LatestproductList/>
            </div>
        </div>
        
    </div>
  )
}

export default LatestProduct