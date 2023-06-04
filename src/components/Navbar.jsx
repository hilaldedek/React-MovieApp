import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import movieIcon from "../assets/icons/movie.png"
import { Dialog} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { logOut } from '../auth/firebase'
import { AuthContext } from '../context/AuthContextProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

const Navbar = () => {
  const{currentUser,setCurrentUser}=useContext(AuthContext);
  const userDisplayName=currentUser.displayName
  console.log(userDisplayName);
  const [name,setName]=useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />  
        <header className="bg-indigo-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={movieIcon} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900 mr-8">
            Log in
          </a>
          <a href="/register" className="text-sm font-semibold leading-6 text-gray-900 mr-8">
            Register
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900" onClick={()=>logOut()} >
            Logout
          </a>
          <div className='mx-8 font-serif italic text-xl'>
            {currentUser && (
              <h3>
                Welcome {userDisplayName}!
              </h3>
            )}
          </div>
        </div>
      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-indigo-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
          <div className='text-center font-serif italic text-xl'>
            {currentUser && (
              <h3>
                Welcome {userDisplayName}!
              </h3>
            )}
          </div>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
                <a
                  href="/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={()=>logOut()}
                >
                  Logout
                </a>
              </div>
            </div> 
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </div>
  )
}

export default Navbar