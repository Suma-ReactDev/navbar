import { useState, useEffect } from 'react'

const renderData = (data) =>{
  return(
    <>{data.map((item)=>{
      return <li key={item.id} 
      className='text-white'>{item.name} </li>
    })}</>
  )
}
const Load = () =>{
  return(
    <><em className='flex font-sans text-xl'>Loading .....</em></>
  )
}

const Form1 = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async() =>{
      setLoading(true) 
      const response = await fetch (`https://jsonplaceholder.typicode.com/comments`)
      setLoading(false)
       setData(await response.json())
    } 
  fetchData()
  }, [])
  
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)

  // To change current page number
  const handleClickPageNumber = (e) => {
    setCurrentPage(Number(e.target.id))
  }
  //
  const hanldeNext = () => {
    setCurrentPage(currentPage+1)
    if(currentPage+1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)
    }
  }

  const handlePrev = () => {

    setCurrentPage(currentPage-1)
    if ((currentPage-1) % pageNumberLimit == 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 5)
  }
  // To set total number of Pages
  const pages = [];
  for (let i = 1; i<=Math.ceil(data.length / itemsPerPage); i++){
    pages.push(i)
  }

  // adding ...

  let pageIncrementBtn = null;
  if(pages.length>maxPageNumberLimit){
    pageIncrementBtn = <li onClick={hanldeNext} className= 'flex p-2 cursor-pointer text-xl'> &hellip; </li>
  }
  let pageDecrementBtn = null;
    if(minPageNumberLimit > 1){
      pageDecrementBtn = <li onClick={handlePrev} className= 'flex p-2 cursor-pointer text-xl'> &hellip; </li>
    }
  
  const renderPageNumbers = pages.map((number)=>{
     if (number < maxPageNumberLimit+1 && number >= minPageNumberLimit) {
      return(
        <li key={number}
        id={number}  
        className={`rounded-full p-3 m-2 cursor-pointer ${ currentPage ===number ? 'bg-slate-500' : 'bg-slate-300'}`}
        onClick={handleClickPageNumber}>{number} </li>
      )
    }
    else return null
  })
    
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem,indexOfLastItem)
  // console.log(currentPage)
  return (
    <div className='bg-slate-800'>
      {renderData(currentItems)}
      {!loading && <>
      <ul className='flex bg-white list-none'>
        <li>
          <button 
            onClick={handlePrev} 
            disabled={currentPage <= pages[0] ? true : false}
            className={`rounded-sm bg-slate-400 p-3 m-2 cursor-pointer `}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button 
            onClick={hanldeNext}
            disabled = {currentPage == pages[pages.length-1] ? true : false}
            className={`rounded-sm bg-slate-400 p-3 m-2 cursor-pointer`}
          >
            Next
          </button>
        </li>
      </ul>
      <div className='flex bg-white '>
        <button 
          className={`rounded-sm bg-slate-400 p-3 m-2 cursor-pointer focus:bg-slate-500`}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
      </>}
      
    </div>
  )
}

export default Form1