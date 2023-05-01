import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div>
      <div className="rounded-md shadow-sm relative" id="searchSection">
        <input
          type="text"
          name="input"
          id="inputSection"
          className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt:10"
          placeholder="Search a movie"
        />
        <button
                  type="submit"
                  id="buttonSection"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Search
                </button>
      </div>
    
    </div>
  )
}

export default Main