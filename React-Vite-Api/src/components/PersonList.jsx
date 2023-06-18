import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import { useNavigate } from "react-router";

const PersonList = ({ url }) => {
  const [persons, setPersons] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPersons(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  const handleButtonClick = (person) => {
    // Handle button click for a person
    console.log("Button clicked for:", person.firstName);
    navigate("/person", { state: { person } });
  };

  return (
    <PersonContainer>
      <div>
        <h2>Person List</h2>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {person.firstName} {person.lastName} - {person.email}
              <button
                className="personButton"
                onClick={() => handleButtonClick(person)}
              >
                {person.firstName}'s' profile
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PersonContainer>
  );
};

export default PersonList;

const PersonContainer = Styled.div`
  padding: 1em 2.5em;

  ul {
    list-style: none; /* Remove bullets */
    padding: 0; /* Optional: Remove default padding */
  }
`;
