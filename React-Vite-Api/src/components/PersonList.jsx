import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
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
      <h2>Person List</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            <PersonInfo>
              <PersonName>
                {person.firstName} {person.lastName}
              </PersonName>
              <PersonEmail>{person.email}</PersonEmail>
            </PersonInfo>
            <ProfileButton onClick={() => handleButtonClick(person)}>
              {person.firstName}'s Profile
            </ProfileButton>
          </li>
        ))}
      </ul>
    </PersonContainer>
  );
};

export default PersonList;

const PersonContainer = styled.div`
  padding: 1em 2.5em;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const PersonInfo = styled.div`
  margin-bottom: 0.5em;
`;

const PersonName = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: #333;
`;

const PersonEmail = styled.p`
  font-size: 0.9em;
  color: #888;
  margin: 0;
`;

const ProfileButton = styled.button`
  background-color: #646cff;
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #535bf2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #535bf2;
  }

  &:active {
    transform: translateY(1px);
  }
`;
