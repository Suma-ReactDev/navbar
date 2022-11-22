import {useState} from 'react'
import Wrapper from './helpers/Wrapper'
import ErrorModal from './helpers/ErrorModal';
const AddUser = ({onAddUser}) => {
  const [userInfo , setUserInfo] = useState({
    userName:'',
    userAge:''
  });
  const [error, setError] = useState('')

  const onChangeHandler = (e) =>{
    setUserInfo((prevUserInfo)=>{
      return {
        ...prevUserInfo, [e.target.name]:e.target.value
      }
    })
    console.log(userInfo.userName)
    console.log(userInfo.userAge)

  }
  const addUserHandler = (e) =>{
    e.preventDefault();
    console.log(userInfo.userName)
    if (userInfo.userName.trim().length===0  || userInfo.userAge.trim().length === 0)
    { 
      console.log(userInfo)
      setError(
        {
          title: 'Invalid input',
          message:`UserName and Age shouldn't be empty`
        });
    return;
      }
    onAddUser(userInfo.userName, userInfo.userAge)
    console.log(userInfo)
      setUserInfo(
        {...userInfo, userName:'', userAge: ''}
      )
    }
    
  
  const errorHandler = () =>{
    setError(null)
  }
  return (
    <Wrapper>
      {error && <ErrorModal 
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
        />}
      <form onSubmit={addUserHandler}
      className='bg-slate-400 grid place-content-center'>
        <label>Username:</label>
        <input 
          type='text'
          onChange={onChangeHandler}
          value={userInfo.userName}
          name='userName'
        />
        <label>Age:(Years)</label>
        <input 
          type='number'
          onChange={onChangeHandler}
          value={userInfo.userAge}
          name='userAge'
          />
        <button className='bg-slate-700 rounded text-white m-5' >Add User</button>
      </form>
    </Wrapper>
  )
}

export default AddUser