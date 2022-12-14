//parent component
import React from 'react';
import MainLayouts from './component/Layouts/main.layouts';
import Albums from './component/Albums/main.albums';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return(
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>Theo Homepage</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>Ini Adalah Posting</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  )
}

export default App
