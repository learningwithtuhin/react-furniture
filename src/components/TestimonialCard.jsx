import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card text-center">
      <div className="stars">
        <img src={props.starImage} alt="Stars" />
      </div>
      <img
        src={props.customerImage}
        className="rounded-circle"
        alt={props.customerName}
      />
      <p className="testimonial-text">{props.text}</p>
      <h6>{props.customerName}</h6>
      <span>{props.role}</span>
    </div>
  )
}

export default TestimonialCard