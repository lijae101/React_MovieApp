import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    const toggleFavorite = (movie) => {
        // Optional: allow removing from favorites directly on this page
        setFavorites((prev) => {
            const updated = prev.filter((m) => m.id !== movie.id);
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        });
    };

    if (favorites.length === 0)
        return (
            <div className="text-white p-8">
                <h1 className="text-3xl font-bold mb-4">Your Favorite Movies ❤️</h1>
                <p>You haven’t added any favorites yet!</p>
            </div>
        );

    return (
        <div className="text-white p-8">
            <h1 className="text-3xl font-bold mb-8 mt-8">Your Favorite Movies ❤️</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isFavorited={true} // they’re all favorites
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
