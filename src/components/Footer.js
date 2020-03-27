import React from 'react'
import {
  Link
} from "react-router-dom";

const Footer = () => {
  return(
    <div className='footerWrapper'>
      <div className='footer'>
        <div className='footerContent'>
          <h3>Quicklinks</h3>
          <ul>
            <li><Link to="/" className='footerItems'>Quick Search</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer