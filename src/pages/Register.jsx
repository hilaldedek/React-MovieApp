import React, { useState } from 'react'
import GoogleIcon from '../assets/icons/GoogleIcon';
import { createUser } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const[firstName,setFirstName]=useState("");
  const[surname,setSurname]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    createUser(email,password,navigate);
    console.log(firstName,surname);
  }
  return (
    <div> 
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg" >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome to Hilal's Movie App</h2>
            <h3 className="mt-4 text-2xl leading-8 text-gray-300 text-center">
            Register
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                name="firstname"
                type="text"
                autoComplete="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your First Name"
                onChange={(e)=>setFirstName(e.target.value)}
              />
              </div>
              <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="surname" className="sr-only">
                Surname
              </label>
              <input
                id="surname"
                name="surname"
                type="text"
                autoComplete="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your Surname"
                onChange={(e)=>setSurname(e.target.value)}
              />
              </div>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
              />
              </div>
              <div  className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                  <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </form>
            
              <div className="text-sm">
                  <a href="/" className="font-semibold text-indigo-400 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              <div className='flex'>
                <div  className="mt-6 flex max-w-md gap-x-4 mr-7" >
                  <button
                  type="submit"
                  className="flex-none rounded-md bg-danger-100 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-danger-200  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-auto" onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              <div  className="mt-6 flex max-w-md gap-x-4">
                <button
                type="button"
                className="flex justify-center items-center rounded-md bg-danger-100 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-danger-200  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-auto"
              >
                Countinue with Google<GoogleIcon className="ml-1"/>
              </button>
              </div>
              </div>
              
              
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    </div>
  )
}

export default Register