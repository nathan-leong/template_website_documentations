import React from 'react'
import {useStoreState} from 'easy-peasy'
import {
  Link
} from "react-router-dom";
import formatSideMenu from '../utils/formatSideMenu'

const Sidebar = () => {
  const items = useStoreState(state => state.bucket.items)
  const path = window.location.pathname
  const currentMenu = path.split("/")[1]
  const filteredItems = items.filter(item => item.startsWith(currentMenu) && !item.endsWith("index.md"))
  
  const itemDepth = item => {
    return item.split("/").length
  }
  return(
    currentMenu !== "" && <div className='sidebarWrapper'>  
      <h3 className='sidebarTitle'>Side Navigation</h3>
      {filteredItems.map(item => 
        <li className={'sidebarItem ' + (!item.endsWith(".md") ? "sidebarSubmenu" : "")} key={item}>
          { !item.endsWith(".md") ? (
          <h4 className='sidebarSubmenu' style={{paddingLeft: 15*itemDepth(item)}}>{formatSideMenu(item.split("/")[itemDepth(item)-2])}</h4>
          ) : (
          <Link to={`/${item.replace(".md","")}`} 
            className="sidebarSelectedItemText"
            key={item}
          >
            <p className={'sidebarSelectedItemText ' + (path === `/${item.replace(".md","")}` ? "sidebarSelectedItem" : "")}
            style={{paddingLeft: 15*itemDepth(item)}}>
              {formatSideMenu(item)}</p>
          </Link>
          )}
        </li>
      )}
    </div>
  )
}

export default Sidebar