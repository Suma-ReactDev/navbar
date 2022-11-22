const Card = ({children, className}) =>{
  return (
    <div className={`${className} bg-white shadow-zinc-600 rounded-lg`}>
      {children}
    </div>
  )
}
export default Card