import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

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
    const {id} = useParams();
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
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
      }//end function updateEmployee
    function removeEmployee(id){
        console.log(id)
        deleteEmployee(id).then((response)=>{
            listEmployees().then((response)=>{
                setEmployess(response.data);
            }).catch(error=>{
                console.log(error);
            })
        }).catch(error=>{
            console.log(error);
        })
    }//end function deleteEmployee
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
                    <th>Actions</th>
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
                            <td>
                                <button className='btn btn-info' 
                                onClick={()=>updateEmployee(employee.id)}>update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                            </td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent