import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Continent from './Continent'
import Country from './Country'

function App() {
  return (
    <>
      <div className="title">
        <img
          src="/images/color_earth.gif"
          alt="A coloured globe of the earth spinning around on its axis"
        />
        <h1>Navigating the worldwide routes</h1>
      </div>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continents/:name" element={<Continent />} />
          <Route path="/continent/:name/:code" element={<Country />} />
        </Routes>
      </div>
    </>
  )
}

export default App
