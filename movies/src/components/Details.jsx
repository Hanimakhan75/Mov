// import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Movie data passed from Link's state
  const movie = location.state?.movie;

  if (!movie) {
    return <p>No movie details found.</p>;
  }

  return (
    <div className="details-container" style={{
     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${movie.image})`}}>
      <div className='details'>
      <img src={movie.image} alt={movie.title} />
       <h2>{movie.title}</h2>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      </div>
      <div className='description'>
      <p>{movie.description}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default Details;

