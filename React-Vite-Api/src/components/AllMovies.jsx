import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get("https://localhost:7299/api/Movie");
        const foundMovie = response.data.find((movie) => movie.id === movieId);
        setMovie(foundMovie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <div>
          <p>
            <strong>Title:</strong> {movie.title}
          </p>
        </div>
      ) : (
        <p>No movie found for the given ID.</p>
      )}
    </div>
  );
};

export default MovieDetails;
