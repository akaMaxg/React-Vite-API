import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

{
  /* */
}
const PersonCard = () => {
  const API_URL = "https://localhost:7299/api/Person/Retrieve all persons";

  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setPersonData(response.data);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <PersonCardContainer>
      <PersonCardHeader>
        <h2>Persons</h2>
      </PersonCardHeader>
      {personData.map((person, index) => (
        <PersonInfoContainer key={index}>
          {/* */}
          <Link to={{ pathname: `/person/${person.id}`, state: { person } }}>
            {/* Pass the person object as part of the state */}
            <p>
              {person.firstName} {person.lastName} - {person.email}
            </p>
          </Link>
        </PersonInfoContainer>
      ))}
    </PersonCardContainer>
  );
};

export default PersonCard;

const PersonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: arial;
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0;
  width: 100%;
  max-width: 800px;
  height: 450px;
  background: #ddf1f8;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 2em 0 4em 0;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    min-width: 200px;
  }
`;

const PersonCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 0.25rem;

  h2 {
    font-family: var(--font-family-1);
    font-weight: 600;
    font-size: 28px;
    color: #0b2447;
    padding: 0;
    margin: 20px 0 15px 0;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const PersonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;

  p {
    font-family: var(--font-family-1);
    font-weight: 600;
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
`;
