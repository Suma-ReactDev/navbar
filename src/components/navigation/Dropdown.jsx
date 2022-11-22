import React from 'react'
import { DropdownItems } from './NavItems'
import { Link } from 'react-router-dom'
const Dropdown = () => {
  return (
    <>
      <ul className='absolute block top-10 left-2 bg-slate-100 mt-5 p-4 text-cyan-700 font-medium rounded-sm'>
        {DropdownItems.map((item)=>{
          return <li key={item.id} className='hover:bg-cyan-100 p-2 w-full rounded-md' >
            <Link to={item.path} >{item.title}</Link>
          </li>
        })}
      </ul>
    </>
  )
}

export default Dropdown