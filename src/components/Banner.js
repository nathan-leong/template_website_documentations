import React from 'react'

const Banner = props => {
  return(
    <div className={props.className ? `bannerWrapper ${props.className}` : 'bannerWrapper'} style={props.color && {'background-color': props.color}}>
      <div className='banner' style={props.style && {...props.style}}>
        {props.children}
    </div>
  </div>
  )
}

export default Banner