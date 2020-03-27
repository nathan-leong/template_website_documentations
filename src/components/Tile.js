import React from 'react'

const Tile = props => {
  return(
    <div className='tileContent'>
      {props.children}
    </div>
  )
}

export default Tile