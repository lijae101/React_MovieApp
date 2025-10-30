import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { useDebounce } from "react-use";
import { updateSearchCount, getTrendingMovies } from "../appwrite.js";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
const [favorites, setFavorites] = useState(() => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
});

 

  // ✅ Save favorites whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ✅ Debounce input
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const alreadyFavorited = prev.some((m) => m.id === movie.id);
      return alreadyFavorited
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie];
    });
  };

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch movies!");

      const data = await response.json();
      if (data.response === "False") {
        setErrorMessage(data.error);
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const trending = await getTrendingMovies();
      setTrendingMovies(trending);
    } catch (error) {
      console.error("Error loading trending movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <>
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>
          Find <span className="text-gradient">Movies</span> You'll Enjoy!
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      {trendingMovies.length > 0 && (
        <section className="trending">
          <h2>Trending Movies</h2>
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p style={{ marginRight: "8px" }}>{index + 1}</p>
                <img src={movie.poster_url} alt={movie.title} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="all-movies">
        <h2>All Movies</h2>
        {isLoading ? (
          <p className="text-white">Loading movies...</p>
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <ul>
            {movieList.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorited={favorites.some((m) => m.id === movie.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Home;
