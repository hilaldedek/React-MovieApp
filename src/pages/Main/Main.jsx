import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div id="searchSection" className='rounded-md shadow-sm relative flex flex-wrap mx-auto isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32'>
      <div className='relative mx-auto mt-5 mb-5'>
        <input
          type="text"
          name="input"
          className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt:10 isolate overflow-hidden bg-gray-900 c"
          placeholder="Search a movie"
        />
    </div>
    <div className='relative mx-auto mt-5 mb-5'>
              <button
                  type="submit"
                  id="buttonSection"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Search
                </button>
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
  )
}

export default Main