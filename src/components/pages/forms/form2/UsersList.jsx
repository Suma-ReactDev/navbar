import React from 'react'

const UsersList = ({users}) => {
  console.log('Users List rendered')
  return (
    <div>
      {users.map((user)=>{
        return <ul key={user}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      })}
    </div>
  )
}

export default UsersList