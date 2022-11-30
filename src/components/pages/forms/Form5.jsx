import {useState, useEffect} from 'react';
import { Button } from './Form3';
import Card from '../../helpers/Card';
import axios from 'axios';
const Form5 = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    emailId:''
  })
  const baseUrl = `http://localhost:8082/api/v1/employees`;
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
    if (data){
      setEmployees(data)
    }
  }
  useEffect(()=>{
    getEmployees()
  },[employees])
  const onChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    axios.post(baseUrl,formData)
    // const data = JSON.stringify(formData)
    // const postFormData = async () =>{
    //   const response = fetch('http://localhost:8082/api/v1/employees',
    //   {
    //     method:'POST',
    //     headers:{
    //       "Content-Type":"application/json"
    //     },
    //     body:data
    //   });
    //   console.log(response)
    // }
    // postFormData()
      setFormData({...formData,emailId:'',firstName:'',lastName:''})
  }
  return (
    <Card className={`bg-sky-700`}>
      <form className=' grid w-1/2 mx-auto m-2 bg-lime-200 p-2' onSubmit={submitHandler} >
        <input 
          type='text'
          placeholder='First Name'
          name='firstName'
          value={formData.firstName}
          className='capitalize m-1 p-1 rounded'
          onChange={onChange}
        />
        <input 
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={formData.lastName}
          className='capitalize m-1 p-1 rounded'
          onChange={onChange}
        />
        <input 
          type='text'
          placeholder='Email'
          name='emailId'
          value={formData.emailId}
          className=' m-1 p-1 rounded'
          onChange={onChange}
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