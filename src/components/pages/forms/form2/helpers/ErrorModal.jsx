import React from 'react'
import  ReactDOM  from 'react-dom'
import Wrapper from './Wrapper'
import Card from './Card'
const BackDrop = () => {
  return <div 
    className='fixed top-0 left-0 min-w-full min-h-full z-10 bg-black opacity-50 '/>
}
const ModalOverlay = ({title, message, onConfirm}) =>{
  return (
    <Card className={`fixed grid place-content-center z-30 p-2 m-2 overflow-hidden`}>
      <header>{title}</header>
      <p>{message}</p>
      <footer>
        <button onClick={onConfirm} className='bg-lime-800 text-white p-2 m-1 rounded'>Okay</button>
      </footer>
    </Card>
  )
}
const ErrorModal = ({title, message, onConfirm}) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
          title={title}
          message={message}
          onConfirm={onConfirm}/>,
        document.getElementById('overlay-root')
      )}
    </Wrapper>
  )
}

export default ErrorModal