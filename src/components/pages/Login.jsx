import React, { useState, useEffect } from 'react'

const Login = () => {
  const [variables, setVariables] = useState({userName:"", password:""})
  const [formisValid, setFormisValid] = useState(false)

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      (variables.userName.includes('@') && variables.password.length>6 && setFormisValid(true))
    })
    return ()=>{
      clearTimeout(identifier)
    }
  },[variables.userName, variables.password])

  const checkForEmpty = (variables.userName ==='' || variables.password === '')
  const onChangeHandler = (e) =>{
    setVariables({...variables, [e.target.name]:e.target.value})
    console.log(variables)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(variables)
    setVariables({userName:'',password:''})
  }
  return (
    <div className=' mx-auto bg-slate-200 flex place-content-center '>
      <form onSubmit={onSubmitHandler} 
      className='w-96 grid bg-slate-300 m-10 p-10'>
        
        <label htmlFor='username' className='text-xl text-zinc-700 mb-2'>Username:</label>
        <input 
          className='p-2 border-2 outline-none bg-cyan-300 rounded-md'
          type='text'
          placeholder='User Name'
          name='userName'
          onChange={onChangeHandler}
          value={variables.userName}
          autoComplete='off'
          />
        <label htmlFor='pwd' className='text-xl text-zinc-700 mt-5 mb-2'>Password:</label>
        <input
          className='p-2 border-2 outline-none bg-cyan-300 rounded-md'
          type='password'
          placeholder='Password'
          name='password'
          onChange={onChangeHandler}
          value={variables.password}
          />
        <button type='submit' 
        className={` text-white text-base w-full p-2 mt-10 rounded-sm font-bold ${
          checkForEmpty ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
        disabled={checkForEmpty || !formisValid}
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Login