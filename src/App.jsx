import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router'
import Album from './components/Album'
import Main from './components/Main'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/main-page" element={<Main/>}></Route>
      <Route path="/albums" element={<Album/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
