import { Fragment, useState } from 'react'
import AddUser from './AddUser'
import UsersList from './UsersList'
const App2 = () => {
  const [usersList, setUsersList] = useState([]);
  const addUser = (uName, uAge) =>{
    setUsersList((prevUsersList)=>{
      return [
        {...prevUsersList, name:uName, age:uAge}
      ]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser ={addUser}/>
      <UsersList users={usersList} />
    </Fragment>
  )
}

export default App2