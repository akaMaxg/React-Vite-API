import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import PersonGenres from "../components/testGenre";
import MyComponent from "../components/testGenrePost";
import MoviesRating from "../components/testMovieRating";
import MyComponent2 from "../components/testGenreMovieRatingPost";

const PersonPage = () => {
  const location = useLocation();
  const { person } = location.state || {}; //null check

  if (!person) {
    // Handle case when person null
    return (
      <div>
        <h1>The Person page</h1>
        <p>Loading...</p>
        <NavBar />
      </div>
    );
  }

  return (
    <div>
      <h2>Person Page</h2>
      <p>ID: {person.id}</p>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <p>Email: {person.email}</p>
      <PersonGenres personId={person.id} />
      <MyComponent personId={person.id} />
      <MoviesRating personId={person.id} />
      <MyComponent2 personId={person.id} />
      <NavBar />
    </div>
  );
};

export default PersonPage;
