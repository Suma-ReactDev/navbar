import {useState, useEffect} from 'react'
import { Button } from './Form3';
import Card from '../../helpers/Card'
const Form5 = () => {
  const [employees, setEmployees] = useState([]);
  const th= 'p-3 m-2 border-white border-seperate border-2 ';
  const td ='p-2 m-2';
  const getEmployees=async ()=>{
    const response = await fetch(`http://localhost:8082/api/v1/employees`,
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data=await response.json()
    console.log(data)
    if (data){
      console.log('Data is present')
      setEmployees(data)
    }
    console.log(employees)
  }
  useEffect(()=>{
    getEmployees()
  },[])

  const submitHandler = (e) =>{
    e.preventDefault();

  }
  return (
    <Card className={`bg-sky-700`}>
      
      <form className=' grid w-1/2 mx-auto m-2 bg-lime-200 p-2' onSubmit={submitHandler} >
        <input 
          type='text'
          placeholder='First Name'
          name='firstName'
          className='capitalize m-1 p-1 rounded'
        />
        <input 
          type='text'
          placeholder='Last Name'
          name='lastName'
          className='capitalize m-1 p-1 rounded'
        />
        <input 
          type='text'
          placeholder='Email'
          name='email'
          className='capitalize m-1 p-1 rounded'
        />
        <Button 
          type='submit'
          btnName='submit'
          className={'bg-cyan-600 text-white m-5'}/>
      </form>
      
      <table className='capitalize w-full'>
        <thead className='bg-amber-500 p-2 m-2 '>
          <tr>
            <th className={th}>id</th>
            <th className={th}>first name</th>
            <th className={th}>last name</th>
            <th className={th}>email</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee)=>{
            return <tr key={employee.id} 
              className='bg-amber-100 border-2 border-white '>
            <td className={td}>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.emailId}</td>
          </tr>
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default Form5