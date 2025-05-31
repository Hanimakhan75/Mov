import React from 'react'
import { useState, useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';




export const getPosts = async () => {
    const response = await fetch('https://ghibliapi.vercel.app/films', {
        method: "GET"
    });
    return await response.json()
}
const Movies = ({ searchTerm }) => {
  const [data, setData] = useState([]); // ✅ Fixed here

  useEffect(() => {
    getPosts().then(setData);
  }, []);

  const filtered = data.filter((movie) =>
   movie.title.toLowerCase().includes((searchTerm || "").toLowerCase())

  );
    return (
        // <>
        <div className='mov-section'>
            <h2>MOVIES</h2>
            <div className='mov-container'>
                {filtered.length > 0 ? (
  filtered.map((e) => (


                        <div className='mov-card' key={e.id}>
                            <div className="img-wrapper">
                              <Link to={`/details/${e.id}`} state={{ movie: e }}>
    <img src={e.image} alt={e.title} className='mov-img' />
</Link>

                                <FaPlay className='play-icon' />
                                <span className="rating-badge">{e.rt_score}/100</span>
                                <div className='mov-details'>
                                    <p> Title: {e.title}</p>
                                    <p className='release'> Release Date: {e.release_date}</p>
                                    {/* <img src={e.image} alt={e.title} className='mov-img'/> */}
                                    {/* <p> Rating: {e.rt_score}</p> */}
                                </div>
                            </div>
                        </div>


                    ))
                ) : (
                    <p>No data</p>
                )}
            </div>
        </div>
        // </>
    )
}

export default Movies