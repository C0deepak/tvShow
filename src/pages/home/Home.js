import React, { useEffect, useState } from 'react'
import './Home.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {

  const [shows, setShows] = useState([]);
  const fetchData = () => {
    return fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className="homeHeading">Movie Shows</div>

      <div className="movieList">
        {
          shows.map((show) => {
            return (
              <div className="movieCard">
                <img src={show.show.image ? show.show.image.medium : 'default.png'} alt="" />
                <div className="movieCardOverlay">
                  <div className="overlayHeading">{show.show.name}</div>
                  <Link to={`/show/${show.show.id}`} key={show.show.id} className="overlayBtn"><BsFillPlayFill size={22} />Watch</Link>
                </div>
                <div className="movieStar">
                  <AiFillStar className='icon' />{show.show.rating.average}
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Home