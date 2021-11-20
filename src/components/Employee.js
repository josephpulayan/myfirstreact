/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import{ useState } from "react"
import employeeService from "../services/employeeService"
import{ useEffect } from "react"
const Employee = ()=>{

    const[employees, setEmployees] = useState([])

    useEffect(
        () =>{
        employeeService.getEmployees()
        .then(
        response =>{
            setEmployees(response.data)
        }
     
      )
      .catch(
      ()=>{
          console.log("e may mali nga")
      })
    }
 
        )
return(
        <div>
        <h3>list of Employees</h3>
        <div>
        <table
        border = "1">
        <tr>
        <td>Name</td>
        <td>Locattion</td>
        <td>Department</td>
            </tr>
            {
            employees.map(
                    employee =>(
                    <tr>
            <td>employee.name</td>
        <td>employee.department</td>
        <td>employee.location</td>
            </tr>
            )
                    )
              }
            
            </table>
            </div>
        </div>)
}

export default Employee
            
