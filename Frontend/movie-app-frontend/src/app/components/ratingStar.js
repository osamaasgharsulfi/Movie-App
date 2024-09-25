
import axios from "@/app/utils/axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ movieId }) => {
  const router = useRouter();
  const [hover, setHover] = useState(null);
  const [ratingValue, setRatingValue] = useState(null); // Corrected rating state name

  const giveRating = async (value) => {
    try {

      setRatingValue(value);

      let data = {
        movieId: parseInt(movieId),
        value: value,
      };
      const response = await axios.post("/rating/rateMovie", data);


     
      alert(response?.data?.message);

     
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("An error occurred while submitting the rating");
    }
  };
  
   const handleBackClick = () => {
    router.push("/dashboard/home"); 
  };

  return (
    <div>
      {/* Render 5 stars for the rating system */}
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            {/* Radio input for each star */}
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => giveRating(currentRating)} // Call giveRating with the selected value
              style={{ display: "none" }} // Hide the actual radio button
            />

            {/* Star icon */}
            <FaStar
              size={30}
              color={
                currentRating <= (hover || ratingValue) ? "#ffc107" : "#e4e5e9"
              }
              onMouseEnter={() => setHover(currentRating)} // Highlight the star on hover
              onMouseLeave={() => setHover(null)} // Reset the highlight when not hovering
              style={{ cursor: "pointer" }} // Add a pointer cursor for better UX
            />
          </label>
        );
      })}
       <button 
        onClick={handleBackClick} 
        style={backButtonStyle} // Apply custom styling to the button
      >
        Back to Home
      </button>
    </div>
  );
};

export default RatingStars;


const backButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "16px",
  display: "inline-block",
};