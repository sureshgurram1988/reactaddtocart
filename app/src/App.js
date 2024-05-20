import React from 'react'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Cards from './components/Cards'
import CardsDetails from './components/CardsDetails'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
      
    </div>
  )
}

export default App
