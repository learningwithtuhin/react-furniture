import React from 'react'

const ProductCard = (props) => {
  return (
    <div className="prod-card">
      <div className="prod-img">
        <img src={props.image} alt={props.title} />
        <i className="bi bi-heart"></i>
       {props.bestseller === "yes" && <span>Best Seller</span>}
        <a href="#">Add to cart</a>
      </div>

      <div className="prod-txt">
        <div className="star">
          {/* Static star image or dynamic stars */}
          <img src={props.starImage} alt="rating" />
        </div>
        <h4>{props.title}</h4>
        <div className="latest-pricing">
          <span className="latest-new-price">₹{props.price}</span>
          <span className="latest-old-price">₹{props.oldPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard