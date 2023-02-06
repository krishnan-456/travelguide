import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import Footer from './Footer';
import Navbar from './Navbar';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password)
      navigate('/signin')
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  }

  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='mt-10 flex items-center justify-center'>
        <div className='w-[880px] h-[540px] lg:shadow-2xl flex items-center lg:justify-between justify-center bg-white rounded-xl'>
          <div className='lg:flex hidden'>
            <img src="https://images.unsplash.com/photo-1674739595755-61ae16c3e438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="sunshine" className='rounded-xl w-[420px] h-[540px] object-cover' />
          </div>
          <div className='flex flex-col items-center justify-center lg:mr-20 lg:px-0 px-5'>
            <form className='' onSubmit={handleSubmit}>
              <p className='text-2xl font-bold mb-10'>Create Account For Free!</p>
              <div className='flex flex-col mb-3'>
                <label className='  font-medium'>Email</label>
                <input type="email" placeholder='Enter the email' className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-auto' onChange={(e) => { setEmail(e.target.value) }} required />
              </div>
              <div className='flex flex-col mb-3'>
                <label className='  font-medium'>Password</label>
                <input type="password" placeholder='Enter the password' className='border-2 border-slate-300 px-4 py-2 outline-none' onChange={(e) => { setPassword(e.target.value) }} required />
              </div>
              <button type='submit' className='border-2 border-black bg-black text-white px-4 py-2 mb-3 mt-4 sm:w-[320px] w-[260px] font-medium'>Sign up</button>
            </form>
            <div className=''>
              <p className='font-medium'>Already have an account? <Link to='/signin' className='font-bold underline'>Login</Link> </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Signup