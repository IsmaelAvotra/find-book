import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import BookDetails from './pages/BookDetails'
import Error from './pages/Error'

// import component
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
