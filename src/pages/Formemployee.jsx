import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import axios from "axios"

const Formemployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    department: '',
    salary: '',
    yearofJoining: '',
    yearofLeaving: '',
    profileImage: ''

  })

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result=await axios.post('http://localhost:3000/add', formData)
        
          console.log(result)
       
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col text-xl justify-center items-center m-4 p-3 border-2 border-slate-300'>
        <form action="POST" onSubmit={handleSubmit}>
          <div className='flex  flex-col mt-20 gap-3'>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="name">Name</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="name" type="text" name='name' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="number">Phone No.</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="number" type="text" name='number' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="email">Email</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="email" type="email" name='email' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="department">Department</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="deaprtment"
                type="text" name='department' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="post">Post</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="post" type="text" name='post' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="salary">Salary</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="salary" type="text" name='salary' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="yearofJoining">Year Of Joining</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="yearofJoining" type="text" name='yearofJoining' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="yearofLeaving">Year Of Leaving</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id='yearofLeaving' type="text" name='yearofLeaving' onChange={handleChange} />
            </div>
            <div className='flex justify-between'>
              <label className='mr-2' htmlFor="profileImage">Profile Image</label>
              <input className='border-2 border-slate-600 rounded-lg outline-none' id="profileImage" type="file" name='profileImage' onChange={handleChange} />
            </div>
          </div>
          <div className='flex justify-center mt-6'><Button type='submit' id="submit"
         name="Submit" />

          </div>        </form>

      </div>
    </div>
  )
}

export default Formemployee