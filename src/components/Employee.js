import{ useState } from "react"
import employeeService from "../services/employeeService"
import{ useEffect } from "react"
import { Link } from "../services/employeeService"
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
    <div className="container">
        <h3>list of Employees</h3>
        <div>
            <table className="table table-hover table-light table-striped">
        <thead>
    
        
             <tr className="table-danger">
                <td>Name</td>
                <td>Location</td>
                <td>Department</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
    {
                employees.map(
                    employee =>(
                         <tr>
                            <td>employee.name</td>
                            <td>employee.department</td>
                            <td>employee.location</td>
                            <td>employee.employeeId</td>
                            
    <link className="btn btn-primary" to={`/edit/$(employee.employeeId)`}>Update</link>
                           
                        </tr>
                    )
                )
            }
        </tbody>
            
            
           </table>
         </div>
       </div>)
}

export default Employee
            
