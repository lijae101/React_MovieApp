import React from "react";
import { Heart } from "lucide-react";

const MovieCard = ({ movie, isFavorited, onToggleFavorite }) => {
  const { title, vote_average, poster_path, release_date, original_language } = movie;

  return (
    <div className="movie-card relative">
      <button
        onClick={() => onToggleFavorite(movie)}
        className="absolute top-2 right-2 p-1 text-white hover:text-red-500 transition"
      >
        <Heart
          size={22}
          fill={isFavorited ? "red" : "transparent"}
          strokeWidth={2}
        />
      </button>

      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
        className="rounded-lg mt-5"
      />

      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content flex items-center gap-2">
          <div className="rating flex items-center gap-1">
            <img src="Star.svg" alt="star" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? new Date(release_date).getFullYear() : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
