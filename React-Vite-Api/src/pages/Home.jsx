import PersonList from "../components/testPerson";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <h1>The Website</h1>
        <NavBar />
        <PersonList url="https://localhost:7299/api/Person/Retrieve%20all%20persons" />{" "}
      </div>
    </>
  );
};

export default Home;
