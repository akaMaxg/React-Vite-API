import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonGenres from "../components/Genres";
import PostGenres from "../components/PostGenres";
import PersonMovie from "../components/PersonMovie";
import PostGenreMovieRating from "../components/PostGenreMovieRating";

//Page accepts a person object form PersonList

const PersonPage = () => {
  const location = useLocation();
  const { person } = location.state || {}; //null check

  if (!person) {
    return (
      <PersonContainer>
        <h1>The Person page</h1>
        <p>Loading...</p>
      </PersonContainer>
    );
  }

  //Renders 3 API calls, information, Genres, Ratings
  //Also renders buttons for postrequests
  return (
    <PersonContainer>
      <h2>Person Page</h2>
      <PersonInfo>
        <p>First Name: {person.firstName}</p>
        <p>Last Name: {person.lastName}</p>
        <p>Email: {person.email}</p>
      </PersonInfo>
      <PersonSection>
        <h3>Genres</h3>
        <PersonGenres personId={person.id} />
        <PostGenres personId={person.id} />
      </PersonSection>
      <PersonSection>
        <h3>Movie Ratings</h3>
        <PersonMovie personId={person.id} />
        <PostGenreMovieRating personId={person.id} />
      </PersonSection>
    </PersonContainer>
  );
};

export default PersonPage;

//CSS for the page
const PersonContainer = styled.div`
  padding: 1em 2.5em;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const PersonInfo = styled.div`
  margin-bottom: 1em;
`;

const PersonSection = styled.div`
  margin-bottom: 1.5em;

  h3 {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
`;
