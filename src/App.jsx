// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { HashRouter, Routes, Route } from 'react-router'
// import Album from './components/Album'
// import Main from './components/Main'

// function App() {
//   return <HashRouter>
//     <Routes>
//       <Route path="/main-page" element={<Main/>}></Route>
//       <Route path="/albums" element={<Album/>}></Route>
//     </Routes>
//   </HashRouter>
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';


import './App.css'
import Main from './components/Main'

export default function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

