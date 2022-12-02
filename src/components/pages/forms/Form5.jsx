import {useState, useEffect} from 'react';
import { Button } from './Form3';
import Card from '../../helpers/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export const SingleEmployee = () =>{
  const {id} = useParams();
  return(
    <Card className={`bg-sky-400 m-5`}>
      <>{id}</>

    </Card>
  )
}

const Form5 = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    emailId:''
  });
  const [editId, setEditId] = useState(null);
  const [query, setQuery] = useState('');

  const fetchEmployee = async () =>{
    const response = await axios.get(`${baseUrl}?q=${query}`);
    console.log(response)
  }

  const baseUrl = `http://localhost:8081/api/v1/employees`;
  const th= 'p-3 m-2 border-white border-seperate border-2 ';
  const td ='p-2 m-2 text-center';
  
  const editItem=(id)=>{
    console.log(id)
    // Works only when input is not null
    const specificItem=employees.find((item)=>item.id===id);
    setFormData({...formData,...specificItem});
    setEditId(specificItem.id);
  }

  const updateEmployee = async(formData,editId) =>{
    const response = axios.put(`${baseUrl}/${editId}`,formData)
    console.log(response)
    setFormData({...formData,emailId:'',firstName:'',lastName:''})
    setEditId(null)
  }

  const deleteItem=(id)=>{
    console.log(id);

  }
  
  const getEmployees=async ()=>{
    const response = await fetch(`http://localhost:8081/api/v1/employees`,
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
    //   const response = fetch('http://localhost:8081/api/v1/employees',
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
      editId && updateEmployee(formData,editId)
  }
  return (
    <Card className={`bg-sky-700`}>
      <div className='flex mx-auto w-full gap-5'>
        <form className='grid w-1/2 mx-auto m-2 bg-lime-200 p-2' onSubmit={submitHandler} >
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
        <SingleEmployee />
      </div>
      <input 
        type='search' />
      <table className='capitalize w-full'>
        <thead className='bg-amber-500 p-2 m-2 '>
          <tr>
            <th className={th}>id</th>
            <th className={th}>first name</th>
            <th className={th}>last name</th>
            <th className={th}>email</th>
            <th className={th}>actions</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee)=>{
            return <tr key={employee.id} 
              className='bg-amber-100 border-2 border-white '>
            <td className={td}>{employee.id}</td>
            <td className={td}>{employee.firstName}</td>
            <td className={td}>{employee.lastName}</td>
            <td className={td}>{employee.emailId}</td>
            <td className={td}><Button className='text-green-400 hover:text-green-700 pr-1'
                onClick={()=>{editItem(employee.id)}}
                btnName={<FaEdit />}
                />
              <Button className='text-red-400 hover:text-red-700'
                onClick={()=>deleteItem(employee.id)}
                btnName={<FaTrash />}
                /> </td>
          </tr>
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default Form5