import React from 'react'
import { useState } from 'react'

function EmployeeListComponent() 
{
  const [employees,setEmployees]= useState([]);

  return (
    <div className='container mt-5'>

        <h4 className='text-center'> Employee Details </h4>

        <div className='row mt-5'>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>DOJ</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>{
                        return <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.doj}</td>
                                    <td>{employee.dept.departName}</td>
                                    <td>{employee.dept.designation}</td>
                                    <td></td>
                                </tr>
                    })
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default EmployeeListComponent

