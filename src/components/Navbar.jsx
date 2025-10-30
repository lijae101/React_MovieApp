import { Home, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-black/30 backdrop-blur-lg text-white border-b border-purple-500/30 z-50">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-purple-400 transition-all"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Home</span>
        </Link>

        <Link
          to="/favorites"
          className="flex items-center gap-2 hover:text-purple-400 transition-all"
        >
          <Star className="w-5 h-5" />
          <span className="font-medium">Favorites</span>
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        MovieFinder
      </h1>

      <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg font-medium">
        Logout
      </button>
    </nav>
  );
}
