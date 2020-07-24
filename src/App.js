import React, {useState} from 'react';
import './App.css';

import {searchPhotos} from './flickrapi'

function App() {
  const [currentPhotos, setPhotos] = useState([])
  const [query, setQuery] = useState("")

  const search = query => {
    searchPhotos(query).then(data => setPhotos(data.photo))
  }
  const handleChange = e => setQuery(e.target.value)
  const handleClick = _ => search(query)
  const handleEnter = e => e.key === 'Enter' && search(query)

  return (
    <div className="App">

      <div className="search-overlay">
        <input 
          className="search-bar"
          type="text" 
          name="search" 
          placeholder="Photos" 
          value={query}
          onChange={handleChange}
          onKeyDown={handleEnter}         
        />
        <button className="search-button" onClick={handleClick}>Search</button>        
      </div>
      
      <ul>{currentPhotos.map(item => (
          <li key={item.id}>
            <img 
              className="image" 
              src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} 
              alt={`${item.title}`}
            />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
