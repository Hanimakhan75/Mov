
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AppNavbar from './components/AppNavbar'
import Home from './components/Home'
import Movies, { getPosts } from './components/Movies'
import Details from './components/Details'
// import { FaPlay } from "react-icons/fa";


function App() {


  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>

     <BrowserRouter>
      <AppNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        <Route path="/movies" element={<Movies searchTerm={searchTerm} />} />
            <Route path="/details/:id" element={<Details />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App
