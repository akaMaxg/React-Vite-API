import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";

const PersonMovies = ({ personId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7299/api/Person/All Ratings for one person?personId=${personId}`
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [personId]);

  return (
    <MoviesContainer>
      <div>
        <h2>All Movies watched with rating</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.movieTitle}>
              {movie.movieTitle} - Rated: {movie.rating}{" "}
            </li>
          ))}
        </ul>
      </div>
    </MoviesContainer>
  );
};

export default PersonMovies;

const MoviesContainer = Styled.div`
  padding: 1em 2.5em;

  ul {
    list-style: none; /* Remove bullets */
    padding: 0; 
`;
