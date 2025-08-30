import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className="ing-card">
      <div className="ing-img">
        <img src={props.icon} alt={props.title} />
      </div>
      <div className="ing-txt">
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
        <p>{props.r}</p>
      </div>
    </div>
  )
}

export default FeatureCard;