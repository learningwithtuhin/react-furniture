import React from 'react'

const DealCard = (props) => {
  return (
   <div className="deal-card d-flex align-items-center">
      <div className="deal-img me-3">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="deal-txt">
        <h5 className="fw-semibold mb-1">{props.title}</h5>

        <div className="deal-star">
          <img src={props.starImage} alt="rating" />
        </div>

        <div className="latest-pricing mb-1">
          <span className="latest-new-price fw-bold text-dark me-2">
            ₹{props.price}
          </span>
          <span className="latest-old-price text-muted text-decoration-line-through">
            ₹{props.oldPrice}
          </span>
        </div>

        <p className="text-danger small mb-2">Only 1 left in stock</p>

        <div className="d-flex gap-2">
          <div className="time-box text-center bg-warning-subtle p-2 rounded">
            <div className="hours">{props.hours || "00"}</div>
            <div className="label small">HRS</div>
          </div>
          <div className="time-box text-center bg-warning-subtle p-2 rounded">
            <div className="minutes">{props.minutes || "00"}</div>
            <div className="label small">MIN</div>
          </div>
          <div className="time-box text-center bg-warning-subtle p-2 rounded">
            <div className="seconds">{props.seconds || "00"}</div>
            <div className="label small">SEC</div>
          </div>
        </div>
      </div>

      <div className="deal-icons">
        <a href="#"><i className="bi bi-heart"></i></a>
        <a href="#"><i className="bi bi-bag"></i></a>
      </div>
    </div>
  )
}

export default DealCard