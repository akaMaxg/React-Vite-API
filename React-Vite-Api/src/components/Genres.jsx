import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";

//Accepts personid, returns all genres for that person

const PersonGenres = ({ personId }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7299/api/Person/All genres for one person?personId=${personId}`
        );
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [personId]);

  return (
    <GenreContainer>
      <div>
        <ul>
          {genres.map((genre) => (
            <li key={genre.genreId}>{genre.genreName}</li>
          ))}
        </ul>
      </div>
    </GenreContainer>
  );
};

export default PersonGenres;

const GenreContainer = Styled.div`
  padding: 1em 2.5em;

  ul {
    list-style: none; 
    padding: 0; 
  }
`;
