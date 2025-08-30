import React from 'react'
import SectionTitleCenter from './SectionTitleCenter'

import { Link } from 'react-router'
import BlogList from './BlogList'

const BlogSec = () => {
  return (
    <div className='blog-sec'>
        <div className='container'>
             <div className='row best-row'>
                <div className='col-md-8'>
<SectionTitleCenter
title="Our Blogs" 
subtitle="Get inspired with home styling tips curated just for you."
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
            <div className='row'>
                <BlogList/>
            </div>
        </div>
    </div>
  )
}

export default BlogSec