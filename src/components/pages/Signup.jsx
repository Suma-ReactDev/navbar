import {useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from '../store/user/userSlice'
//{signupUser, }
//import toast from 'react-hot-toast
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, isSuccess, isError, errorMessage, clearState } = useSelector(userSelector)

  const submitHandler = (data) =>{
    // dispatch(signupUser(data));
  }
  useEffect(()=>{
    return ()=> {
      dispatch(clearState());
    }
  }, [])
  return (
    <div>

    </div>
  )
}

export default Signup