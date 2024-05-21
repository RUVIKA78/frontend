import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState('')

    

    const handleSearch = async (e) => {
        setSearch(e.target.value);
        const response = await axios.get(`http://localhost:3000/employees/search?q=${e.target.value}`)
        setEmployees(response.data)
    }
    return (
        <div>
            <div className="flex justify-between mt-5 mx-7 text-xl">
                <div className="logo text-2xl text-yellow-700 font-black">implyoe</div>
                <div className="search">
                    <div className=''>
                        <label className='mr-2' htmlFor="search">Search</label>
                        <input
                            className='border-2 border-slate-500 rounded-lg px-3 py-2 outline-none'
                            type="search"
                            name='search'
                            placeholder='search here'
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <div className="menu flex gap-3 text-blue-900">
                    <Link to="/">Home</Link>
                    <Link to="/employees/all">Employees</Link>
                    <Link to="/employees/add" >Add Employees</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar