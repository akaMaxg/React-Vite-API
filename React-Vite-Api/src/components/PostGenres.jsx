import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import styled from "styled-components";

//Post-genres API that sends the form required then reloads page
//accepts personID

const PostGenres = ({ personId }) => {
  const [result, setResult] = useState(null);
  const [genreId, setGenreId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7299/api/Person/Create new genre for a person",
        {
          personId: personId,
          genreId: genreId,
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

  const closeModal = () => {
    setIsModalOpen(false);
    setResult(null);
    setGenreId("");
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
            <h2>Enter the id for the specific genre</h2>
            <input
              type="text"
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
              placeholder="Genres id"
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
  height: 20vh;
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

export default PostGenres;
