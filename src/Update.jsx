import React,{useState} from 'react'
import { useDispatch ,  useSelector } from 'react-redux';
import { useParams , useNavigate } from 'react-router-dom'
import { updateUser } from './UserReducer';

const Update = () => {

  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const {name , email} = existingUser[0];
  const [userName,setName] = useState(name)
    const [userEmail,setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate('/')

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateUser({id: id, name: userName, email: userEmail}))
      navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3 className='text-center'>Update User</h3>
            <form  action="">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter your name' 
                    onChange={e => setName(e.target.value)} 
                    value={userName}
                    required />
                </div>
                <div>
                    <label htmlFor="email">EMail:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter your EMail'
                    onChange={e => setEmail(e.target.value)}
                     value={userEmail}
                    required />
                </div><br />
                <button onClick={handleSubmit}  className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update