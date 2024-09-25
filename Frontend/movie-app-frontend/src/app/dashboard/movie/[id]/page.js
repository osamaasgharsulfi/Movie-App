"use client";
import React, { useEffect, useState } from "react";
import axios from "@/app/utils/axios";
import StarRating from "@/app/components/ratingStar";
import { useRouter } from "next/navigation";
import styles from "@/app/Styles/dashboard.module.css";

const MovieDetails = ({ params }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`movies/getMovie/${params.id}`);
        console.log("data", response?.data);
        setMovie(response?.data?.data); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [params.id]);

  if (!movie) {
    return <p>Loading...</p>; // Show a loading state while fetching movie details
  }

  return (
    <div className={styles.movieDetails}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <StarRating movieId={params.id} />
    </div>
  );
};

export default MovieDetails;
