import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import styled from "styled-components";

//Post-component with modal, accepts the parameters needed to send the post request when submit button is pressed
//Then reloads page

const PostGenreMovieRating = ({ personId }) => {
  const [result, setResult] = useState(null);
  const [movieId, setMovieId] = useState("");
  const [genreId, setGenreId] = useState("");
  const [movieLink, setMovieLink] = useState("");
  const [rating, setRating] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7299/api/MovieGenrePerson",
        {
          movieId: movieId,
          personId: personId,
          genreId: genreId,
          movieLink: movieLink,
          rating: rating,
        }
      );
      if (response.status === 200) {
        setResult(response.data);
        closeModal();
        window.location.reload();
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  //Resets variables
  const closeModal = () => {
    setIsModalOpen(false);
    setResult(null);
    setMovieId("");
    setGenreId("");
    setMovieLink("");
    setRating("");
  };

  return (
    <div>
      <button onClick={openModal}>Make POST Request</button>
      {result && <p>Response: {result}</p>}
      {isModalOpen && (
        <ModalWrapper
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <ModalContent>
            <h2>Enter Movie Details</h2>
            <input
              type="text"
              value={movieId}
              onChange={(e) => setMovieId(e.target.value)}
              placeholder="Movie ID"
            />
            <input
              type="text"
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
              placeholder="Genre ID"
            />
            <input
              type="text"
              value={movieLink}
              onChange={(e) => setMovieLink(e.target.value)}
              placeholder="Movie Link"
            />
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
            />
            <ButtonWrapper>
              <NiceButton>
                <SubmitButton onClick={handlePostRequest}>Submit</SubmitButton>
              </NiceButton>
              <NiceButton>
                <CancelButton onClick={closeModal}>Cancel</CancelButton>
              </NiceButton>
            </ButtonWrapper>
          </ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
};

const NiceButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 20vw;
  height: 35vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  /* Add your submit button styles here */
`;

const CancelButton = styled.button`
  /* Add your cancel button styles here */
`;

export default PostGenreMovieRating;
