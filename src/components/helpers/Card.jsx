const Card = ({className,children}) =>{
  return(
    <div className={`${className} p-5 mx-5 w-screen mt-10 bg-slate-100 rounded shadow-lg shadow-slate-500 transition-all ease-linear delay-100 duration-300 `}>{children}</div>
  )
}
export default Card;