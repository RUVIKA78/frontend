import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Employee = () => {
const [employees, setEmployees]=useState([])
  
useEffect(() => {
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees/all');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  fetchEmployees();
}, []);

  
  return (
    <div>
      <Navbar />
      {employees.map(employee => (
        <Card key={ employee.id} employee={employee} />
      ))}
    </div>
  )
}

export default Employee