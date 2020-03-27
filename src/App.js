import React, {useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy'
import Router from './Router'
import axios from 'axios'
import './App.css'
import {list_bucket_items} from './CONSTANTS.json'
function App(){

    const updateItems = useStoreActions( actions => actions.bucket.updateItems)
    const updateMenu = useStoreActions( actions => actions.bucket.updateMenu)
    const storeMenu = useStoreState(state => state.bucket.menu)
    useEffect(() => {
      async function fetchData(){
        const res = await axios.get(list_bucket_items)
        const menu = res.data.filter(item => !item.endsWith('.md') && !item.startsWith("images") && item.split("/").length === 2)
        const items = res.data.filter(item => item.split("/").length > 1 && !menu.includes(item))
        updateMenu(menu.map(menuItem => menuItem.replace("/","")))
        updateItems(items)
      }
      fetchData()
    }, [updateItems, updateMenu])
    return (
      <Router menu={storeMenu}/>
    );
}

export default App;
