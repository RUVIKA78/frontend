import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Employee from './pages/Employee'
import Formemployee from './pages/Formemployee'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/employees/all' element={<Employee />}></Route>
          <Route path='/employees/add' element={<Formemployee />}></Route>
        </Routes>

    </div>
  )
}

export default App