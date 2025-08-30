import React from 'react'

import blogs from '../data/blogs'
import BlogCard from './blogCard'

const BlogList = () => {
  return (
    <div className='row'>
       
        {blogs.map((blog)=>(
            <div className='col-md-4' key={blog.id}>   
            <BlogCard
          key={blog.id}
          image={blog.image}
          tag={blog.tag}
          date={blog.date}
          title={blog.title}
          authorImage={blog.authorImage}
          authorName={blog.authorName}
          authorRole={blog.authorRole}
        /></div> 
          
        )
          
        )}
    </div>
  )
}

export default BlogList