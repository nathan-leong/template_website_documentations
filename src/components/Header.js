import React, {useState} from 'react'
import logo from '../images/logo.svg';
import hamburger from '../images/hamburger.svg';
import {useStoreState} from 'easy-peasy'
import {
  Link
} from "react-router-dom";

const MenuList = props => {
  const menu = useStoreState(state => state.bucket.menu)
  const items = useStoreState(state => state.bucket.items)
  return (
  <div className={props.expandMenu ? 'expandedMenuList' : 'menuList'}>
    {menu.map(menuItem => 
      <Link to={items.includes(`${menuItem}/index.md`) ? `/${menuItem}/index` : (
        items.length > 0 ? "/" + items.filter(item => item.startsWith(menuItem) && item.endsWith(".md"))[0].replace(".md", "") : ""
      )}
        className={props.expandMenu ? 'expandedMenuItem' : 'menuItems'}
        key={menuItem}
      >
        <li className={window.location.pathname.startsWith(`/${menuItem}`) ? "selectedMenuItem" : ""}
        key={menuItem}
        >{menuItem}</li>
      </Link>
    )}
  </div>
  )
}
const Header = () => {
  
  const [expandMenu, setExpandMenu] = useState(false)
  return(
    <div className='headerWrapper'>
      <div className='header'>
        <Link to="/"><img src={logo} className='logo' alt='logo'/></Link>
        <div className='shrinkHide'>
          <MenuList/>
        </div>
        <div className='expandHide'>
          <a onClick={()=> setExpandMenu(!expandMenu)}>
            <img src={hamburger} className='hamburgerMenu' alt='hamburgerMenu'/>
          </a>
          {expandMenu && <MenuList expandMenu={expandMenu}/>}
        </div>
      </div>
    </div>
  )
}

export default Header