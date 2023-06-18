import React from "react";
import PersonList from "../components/PersonList";
import NavBar from "../components/Navbar";
import styled from "styled-components";
import backgroundImage from "../assets/MainContentPicture.jpg";

const Home = () => {
  return (
    <>
      <Header>
        <NavBar />
        <HeaderContent>
          <h1>The Website</h1>
        </HeaderContent>
      </Header>
      <ContentContainer>
        <PersonList url="https://localhost:7299/api/Person/Retrieve%20all%20persons" />
      </ContentContainer>
    </>
  );
};

const Header = styled.header`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 20px;
  text-align: center;
  height: 66vh;
  width: 100vw;
`;

const HeaderContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20%;
`;

const ContentContainer = styled.div`
  background-color: #f5ebeb;
  padding: 30px;
`;

export default Home;
