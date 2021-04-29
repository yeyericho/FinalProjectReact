import React from "react";

// http://www.omdbapi.com/?i=tt3896198&apikey=ef080f4a

const Movie = (props) => {
  return (
    <>
      <div className="movies">
        {props.movies != undefined ? (
          props.movies.map((movie, index) => (
            <>
              <div className="movie">
                <p>{movie.Title}</p>
                <div>
                  {" "}
                  <img src={movie.Poster} alt="No Image"></img>
                </div>
              </div>
            </>
          ))
        ) : (
          <div>No result</div>
        )}
      </div>
    </>
  );
};

export default Movie;
