import React from 'react'
import { Link } from 'react-router'

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={props.image} alt="Blog" />
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <span className="blog-badge">{props.tag}</span>
          <span className="date">{props.date}</span>
        </div>

        <Link href="#">{props.title}</Link>

        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
          <img src={props.authorImage} alt={props.authorName} />
          <div className="author-content">
            <h6>{props.authorName}</h6>
            <span>{props.authorRole}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard