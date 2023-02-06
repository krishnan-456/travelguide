import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import logo from '../assets/Google.svg'
import Navbar from './Navbar';
import Footer from './Footer';


const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, signIn, signInWithGoogle } = useUserAuth();
  const navigate = useNavigate();
  function setCookie(cname, cvalue, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const log = await signIn(email, password)
      setCookie("user", log, 10);
      // localStorage.setItem('user', user.email)
      navigate('/')
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const log = await signInWithGoogle();

      setCookie("user", log, 10);
      // localStorage.setItem('user', user.email)
      navigate('/');
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
            <img src="https://wallpapercave.com/wp/wp9781354.jpg" alt="sunshine" className='rounded-xl w-[420px] h-[540px] object-cover' />
          </div>
          <div className='flex flex-col items-center justify-center lg:mr-20'>
            <form className='' onSubmit={handleSubmit}>
              <p className='text-2xl font-bold mb-10'>Welcome back!</p>
              <div className='flex flex-col mb-3'>
                <label className='  font-medium'>Email</label>
                <input type="email" placeholder='Enter the email' className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-auto' onChange={(e) => { setEmail(e.target.value) }} required />
              </div>
              <div className='flex flex-col mb-7'>
                <label className='  font-medium'>Password</label>
                <input type="password" placeholder='Enter the password' className='border-2 border-slate-300 px-4 py-2 outline-none' onChange={(e) => { setPassword(e.target.value) }} required />
              </div>
              <div className='flex items-center justify-center'>
                <button type='submit' className='border-2 border-black bg-black text-white px-4 py-2 mb-3 sm:w-[320px] w-[260px] font-medium'>Log in</button>
              </div>
            </form>
            <div className='border-2 border-slate-300 px-4 py-1 mb-3 sm:w-[320px] w-[260px] font-medium flex items-center justify-center gap-2'>
              <img src={logo} alt="googleLogo" width={34} height={34} />
              <button type="submit" onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>
            <div className=''>
              <p className='  font-medium'>Donot have an account? <Link to='/signup' className='font-bold underline'>Signup</Link> </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signin