import {useState, useEffect} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const Button = ({btnName, className, onClick,...props}) =>{
  return(
    <button 
  className={`${className} uppercase font-bold rounded p-1 items-center border-transparent transition-colors ease-linear duration-350`}
  type={props.type || 'button'}
  onClick={onClick}
  > 
    {btnName}
  </button>
  )
}

export const Alert = ({type, msg, removeAlert, list}) =>{
  useEffect (()=>{
    const identifier = setTimeout(()=>{
      removeAlert();
    },3000);
    return () => clearTimeout(identifier);
  },[list])
  return <p className={`mb-2 grid place-content-center text-base ${type==='danger'? 'bg-red-400':'bg-green-400'} `}>{msg}</p>
    
}

const List = ({items,removeItem,editItem}) =>{
  return (
    <>
      {items.map((item)=>{
        const {id, title} = item;
        return(
          <article key={id}
            className='flex justify-between capitalize mb-2 pt-1 pb-1 pl-2 pr-2 hover:bg-slate-200 transition-colors ease-linear duration-350 rounded'>
            <p>{title}</p>
            <div className='bg-transparent border-transparent transition-all ease-linear duration-300'>
              <Button className='text-green-400 hover:text-green-700 pr-1'
                onClick={()=>{editItem(id)}}
                btnName={<FaEdit />}
                />
              <Button className='text-red-400 hover:text-red-700'
                onClick={()=>removeItem(id)}
                btnName={<FaTrash />}
                />
            </div>
          </article>
        )
      })}
    </>
  )
}
const getLocalStorage = () =>{
  let list = localStorage.getItem('list')
  if(list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  }
  else {
    return [];
  }
}
const Form3 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({show:true, msg:'', type:'success'});
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const showAlert = (show=false, type='', msg='') =>{
    setAlert({show,type,msg})
  }
  const clearList = () =>{
    showAlert(true, 'danger', 'List is Empty!!!')
    setList([]);
  }
  const removeItem = (id) =>{
    showAlert(true,'danger', 'Item removed!');
    setList(list.filter(item=>item.id !==id));
  }
  const editItem = (id) =>{
    const specificItem = list.find((item)=>item.id === id);
    setName(specificItem.title);
    setIsEditing(true);
    setEditId(id);
  }
  const cancelClick = (e) =>{
    setName('');
    setIsEditing(false);
    setEditId(null);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      showAlert(true, 'danger', 'Please Enter value')
    }
    else if(name && isEditing){
      setList(
        list.map((item)=>{
          if(item.id === editId){
            return {...item, title: name};
          }
          return item;
        })
      )
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    }
    else{
      showAlert(true, 'success', 'Item added to the List');
      const newItem = {id:new Date().getTime().toString(),
      title:name};
      setList([...list, newItem]);
      setName('')
    }
  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))    
  },[list])

  return (
    <section className='p-5 w-screen max-w-xl mx-auto mt-10 bg-slate-100 rounded shadow-lg shadow-slate-500 transition-all ease-linear delay-100 duration-300 '>
      <form className='' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>Grocery Bud</h3>
          <input 
            type='text'
            className='m-1 p-1 rounded border shadow-md shadow-white outline-none capitalize '
            placeholder='eg : Eggs'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            {isEditing &&
              <Button 
              type='submit'
              className=' bg-cyan-400 shadow-md shadow-blue-800 bg-transparent hover:text-white active:text-white focus:text-white'
              btnName='cancel'
              onClick={cancelClick} 
              />
            }
            <Button 
              type='submit'
              className=' bg-cyan-400 shadow-md shadow-blue-800 bg-transparent hover:text-white active:text-white focus:text-white'
              btnName={isEditing ? 'edit' :'submit'} /> 
      </form>
      {list.length>0 && (
        <div className='mt-8'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <Button 
        className='grid w-full hover:bg-slate-200 text-red-400 mt-5 hover:text-red-600  bg-transparent '
        onClick={clearList}
        btnName={'clear items'}/>
      </div>
      )}
    </section>
  )
}

export default Form3