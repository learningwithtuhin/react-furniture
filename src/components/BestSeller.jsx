import React from 'react'
import ProductList from './productList'
import SectionTitleCenter from './SectionTitleCenter'
import { Link } from "react-router-dom";

const BestSeller = () => {
  return (
    <div className='best-seller'>
        <div className='container'>
            <div className='row best-row'>
                <div className='col-md-8'>
<SectionTitleCenter
title="Best Selling Products" 
subtitle="These bestsellers are a hit—grab yours while they last!"
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
                <ProductList/>
            </div>
        </div>
        
    </div>
  )
}

export default BestSeller