import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const dummyData = [
        {
            "id":1,
            "firstName":"Mubashar",
            "lastName":"Shah",
            "email":"mub@gmail.com"
        },
        {
            "id":2,
            "firstName":"Kausar",
            "lastName":"Shah",
            "email":"Kau@gmail.com"
        },
        {
            "id":3,
            "firstName":"Fazilat",
            "lastName":"Shah",
            "email":"faz@gmail.com"
        }
    ]
    const [employees, setEmployess]=useState([])
    const navigator = useNavigate();
    useEffect(()=>{
        listEmployees().then((response) =>{
            setEmployess (response.data);
        }).catch(error=>{
            console.error(error);
        })
    },[])
    //defining addNewEmployee function
    function addNewEmployee(){
        navigator('/add-Employee')
    }
  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>
        <button className='btn btn-primary mb-2'onClick={addNewEmployee}>
            AddEmployee
        </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Email ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent