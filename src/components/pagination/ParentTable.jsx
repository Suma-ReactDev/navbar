import {useState, useEffect, useCallback } from 'react'
import http from '../http';
import PaginatedUsers from '../PaginatedUsers';
import ExtractPagination from './ExtractPagination';
import {  usePaginationContext } from '../store/pagination';
const ParentOfTable = () => {
  const { users, setUsers, currentItems} = usePaginationContext()
  
  // ************** getting the form Data ******************/
  const getFormData = useCallback( async () => {
    const response = await http.get("api/registers");
    const array =await response.data.data;
    console.log(array);
    setUsers(array);
  },[]
)

useEffect(() => {
  getFormData();
  console.log(users)
   }, [getFormData]);
  
  console.log(users)
  return (
    <>
        <PaginatedUsers users={currentItems}/>
        <ExtractPagination />
    </>
  )
}

export default ParentOfTable