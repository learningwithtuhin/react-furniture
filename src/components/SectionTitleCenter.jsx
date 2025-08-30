import React from 'react'

const SectionTitleCenter = (props) => {
  return (
    <div className='mini-hdr'>
        <h4> {props.title}</h4>
        <p> {props.subtitle}</p>
    </div>
  )
}

export default SectionTitleCenter