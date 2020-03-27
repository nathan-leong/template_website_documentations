import React, {useState} from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Tile from '../components/Tile';
import tileImage from '../../src/images/search.png';
import {useStoreState} from 'easy-peasy'
import {
  Link
} from "react-router-dom";

import '../App.css'

function HomePage() {
  const items = useStoreState(state => state.bucket.items)
  const [searchTerms, updateSearchTerms] = useState([])
  const handleChange = (e) => {
    updateSearchTerms(e.target.value.split(" "))
  }
  const preFilteredItems = items.filter(item => !item.startsWith('images/') && item.endsWith('.md'))
  const displayFilteredItems = itemArray => {
    return itemArray.map(
      filteredItem =>           
      <Link to={`/${filteredItem.replace(".md","")}`} className="sidebarSelectedItemText" key={filteredItem}>
        <p>{filteredItem.replace(".md","")}</p>
      </Link>
    )
  }
  return (
    <Layout>
      <div className="homepage">
        <Banner color='white'>
          <Tile>
            <img src={tileImage} alt='search'/>
            <h3>Quick Search</h3>
            <input id="search" onChange={(e) => handleChange(e)}></input>
            {searchTerms.length > 0 && displayFilteredItems(
              preFilteredItems.filter(item => searchTerms.every(term => item.toLowerCase().includes(term.toLowerCase())))
            )}
          </Tile>
          
        </Banner>
      </div>
    </Layout>
  );
}

export default HomePage;
