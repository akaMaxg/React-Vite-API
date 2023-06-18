import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const MyComponent = ({ personId }) => {
  const [result, setResult] = useState(null);
  const [movieId, setMovieId] = useState("");
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
        closeModal(); // Call closeModal as a function
        window.location.reload(); // Reload the page to fetch the updated genre list
      } else {
        console.error("Unexpected response:", response);
        // Handle the case when the response code is not 200
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
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>Enter genreId</h2>
          <input
            type="text"
            value={genreId}
            onChange={(e) => setGenreId(e.target.value)}
          />
          <button
            onClick={(event) => {
              handlePostRequest(event);
              return false;
            }}
          >
            Submit
          </button>
          <button
            onClick={(event) => {
              closeModal();
              event.preventDefault();
            }}
          >
            Cancel
          </button>
        </Modal>
      )}
    </div>
  );
};

export default MyComponent;
