import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='flex justify-center items-center mt-64 gap-5'>
        <Link to="/employees/add"><Button name="Add Employee" /></Link>
        <Link to="/employees/all">        <Button name="View Employees" />
        </Link>
      </div>
    </div>
  )
}

export default Home