import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import MovieDetails from "./testAllMovies";

const MoviesRating = ({ personId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7299/api/MovieGenrePerson"
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => movie.personId === personId);

  return (
    <MoviesContainer>
      <div>
        <h2>All Movies watched with rating</h2>
        {filteredMovies.length === 0 ? (
          <p>No movies found for this person</p>
        ) : (
          <ul>
            {filteredMovies.map((movie) => (
              <li key={movie.movieId}>
                {movie.movieId ? (
                  <>
                    <MovieDetails movieId={movie.movieId} />
                    <p>
                      <strong>Rated:</strong> {movie.rating}
                    </p>
                    <p>
                      <strong>Link:</strong> -- {movie.movieLink}
                    </p>
                  </>
                ) : (
                  "Loading movie..."
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </MoviesContainer>
  );
};

export default MoviesRating;

const MoviesContainer = Styled.div`
  padding: 1em 2.5em;

  ul {
    list-style: none; /* Remove bullets */
    padding: 0; 
`;
