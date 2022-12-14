import {useState, useRef, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Dropdown from './Dropdown'
import { navItems } from './NavItems'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { DropdownItems } from './NavItems'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const dropdownRef = useRef();
  window.addEventListener('click', (e)=>{
    dropdown && console.log(e.target === dropdownRef.current)
  })
  const activeLink ='p-2 m-2 rounded-sm font-medium text-lg bg-white text-cyan-700 transition-opacity underline'
  const normalLink ='bg-cyan-900 p-2 m-2 text-white rounded-sm font-medium text-lg hover:bg-white hover:text-cyan-900 hover:text-bg-cyan-900 hover:transition-opacity' 
  
  return (
    <header className='w-screen h-20 bg-cyan-700'>
      <nav className='flex'>
        <h1 className='flex justify-start text-center items-center text-3xl text-white font-medium m-5'>Welcome</h1>
        <ul className='flex w-full justify-evenly list-none items-center '>
          {navItems.map((item)=>{
            if(item.title === 'Forms'){
              return <li key={item.id}
                  className='flex relative'
                  onClick={()=>{setDropdown(!dropdown)}} 
                  >
                    <NavLink
                      to={item.path}
                      className={({isActive})=>isActive?`flex relative w-20 ${activeLink}`:`flex relative w-20 ${normalLink}`}
                      >{item.title}<RiArrowDropDownLine className='absolute -right-2 pr-1 rounded-full font-extrabold text-3xl'
                      onClick={()=>{setDropdown(!dropdown)}}
                      />
                    </NavLink>
                    {dropdown && <div className='w-24 bg-slate-500 absolute top-14 mt-4 mb-4 p-2' ref={dropdownRef}>
                    <ul className=' bg-slate-100 p-3 text-cyan-700 font-medium rounded-sm'>
                      {
                        DropdownItems.map((item)=>{
                        return <li key={item.id} className='hover:bg-cyan-100 rounded-md' >
                          <Link to={item.path} >{item.title}</Link>
                        </li>
                      })}
                      </ul>
                      </div>}
                </li>
            }
            return <li key={item.id}
              className='flex'
              ><NavLink to={item.path}
                  className={({isActive})=>isActive ? activeLink : normalLink} >{item.title}</NavLink>
              </li>
          })}
        </ul>
      </nav>
    </header>
  )
}
export default Navbar