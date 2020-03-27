import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
const Layout = props => {
  return(
  <div className='app'>
    <Header/>
    <div className='appBody'>
      <Sidebar/>
      <div className='appContentWrapper'>
        {props.children}
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Layout