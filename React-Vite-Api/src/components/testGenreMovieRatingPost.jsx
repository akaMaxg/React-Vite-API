import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const MyComponent2 = ({ personId }) => {
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
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
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
          <button onClick={handlePostRequest}>Submit</button>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      )}
    </div>
  );
};

export default MyComponent2;
