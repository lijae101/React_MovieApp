🎬 React Movie App

A sleek, modern React web app that lets users discover and search for movies — powered by the TMDB API.
It features a Trending Movies section that updates dynamically based on user searches via Appwrite.
Deployed live on Vercel:
👉 https://react-movie-app-three-pi.vercel.app/

**Features**

Search Movies – Search any movie title instantly using the TMDB API, uses debouncing to limit API calls
Trending Movies – Automatically tracks and displays the top searched movies
Real-Time Backend – Uses Appwrite to store and retrieve trending data
Modern UI – Built with Tailwind CSS for responsive, clean design
Optimized Search – Includes debouncing for smooth and efficient querying

**Tech Stack**

React (Vite) -> Frontend framework
Appwrite -> Backend
TMDB API -> Movie data source
Tailwind CSS -> Styling

🗂️ Project Structure
movieapp/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── (Navbar, Search, MovieCard, etc.)
│   ├── App.css
│   ├── App.jsx
│   ├── appwrite.js
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

⚙️ Setup & Installation

1. Clone the repository

git clone https://github.com/yourusername/movieapp.git
cd movieapp

2. Install dependencies

npm install

Create a .env.local file
Add your own TMDB and Appwrite credentials:

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_TABLE_ID=your_table_id

Run locally

npm run dev

**Live Demo
**
🔗 Try it here:
👉 https://react-movie-app-three-pi.vercel.app/
