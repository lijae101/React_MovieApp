# 🎬 React Movie App

A modern movie search web app built with **React**, **Tailwind CSS**, and **Appwrite**.  
The app lets users explore movies via the **TMDB API**, featuring live search, debounced API requests for performance, and a **trending movies** section powered by stored search data.

🔗 **Live Demo:** [https://react-movie-app-three-pi.vercel.app/](https://react-movie-app-three-pi.vercel.app/)

---

## 🚀 Features

- 🔍 **Search Movies:** Find movies in real time using the TMDB API.  
- ⚡ **Debounced Search:** Optimized API calls using input debouncing to reduce unnecessary requests.  
- 🔥 **Trending Movies:** Displays the top 5 most searched movies, dynamically updated from the Appwrite database.  
- 🎨 **Modern UI:** Built with Tailwind CSS for a responsive, sleek look.  
- 🧠 **Database Integration:** Uses Appwrite to track and store search frequency data.  
- 🌱 **Future Enhancements:**  
  - User accounts and authentication  
  - Ability to favorite movies  
  - Detailed movie info pages

---

## 🧩 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS  
- **Database:** Appwrite  
- **API:** TMDB (The Movie Database)  
- **Hosting:** Vercel  

---

## 🗂️ Project Structure

```bash
movieapp/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Search.jsx
│   │   ├── MovieCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
├── appwrite.js
├── .env.local
├── index.html
├── package.json
├── vite.config.js
└── README.md


