import React, {useEffect, useState, Fragment} from 'react'
import Show from './show/Show'; 
import '../../index.css'
import Search from '../search/Search'; 
import ShowDetails from '../details/ShowDetails';

const TOP10SH = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=40cfd6f06d23fa390065f3fa55c03d54&page=1"



const SEARCHSH = "https://api.themoviedb.org/3/search/tv?&api_key=40cfd6f06d23fa390065f3fa55c03d54&query="


const Tvshows = (props) => {
  const [shows, setShows] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [currentshow, setCurrentShow] = useState(null); 


  useEffect(() => {
    fetch(TOP10SH)
    .then(res => res.json())
    .then(data => {
      setShows(data.results); 
    })
  }, [])


  const getShows = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setShows(data.results); 
    })
  }

  const handleOnChange = (e) => {
    e.preventDefault(); 
    setSearchTerm(e.target.value); 
    

  
      if(searchTerm.length >= 2) {
        getShows(SEARCHSH + searchTerm);
      } else if(searchTerm ==="   ") {
        alert('Stop entering empty spaces'); 
      } else {
        getShows(TOP10SH); 
      }
    
  }

  const viewShowInfo = (id) => {
    const filteredShow = shows.filter(show => show.id === id)

    const newCurrentShow = filteredShow.length > 0 ? filteredShow[0] : null

    setCurrentShow(newCurrentShow)
  }

  const closeShowInfo = () => {
    setCurrentShow(null); 
  }


return(
  <Fragment>
    {currentshow === null ? <div>
      
      <Search 
      searchTerm = {searchTerm} 
      setSearchTerm = {setSearchTerm} 
      handleOnChange = {handleOnChange}
      />


    <div className = "movie-container">
      {shows.length > 0 && shows.map((shows)=> (
        <Show showId = {shows.id} viewShowInfo = {viewShowInfo} key = {shows.id} {...shows}/> 
      ))}
    </div>
    
    
    </div> 
      :
      <ShowDetails 
        currentshow = {currentshow} 
        closeShowInfo={closeShowInfo} />
    }

  </Fragment>
  
  )
}
export default Tvshows
