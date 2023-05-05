import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ShowDetail from './pages/show/ShowDetail'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/show/:id' element={<ShowDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App