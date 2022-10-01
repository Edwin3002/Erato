import React, { useState } from 'react'
import Link from 'next/link'
const Navb = () => {

  const [btnNav, setBtnNav] = useState(false);

  return (

<nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-red-500">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://res.cloudinary.com/edwin3002/image/upload/v1664576091/Erato/logo-2_rtfwrr.png" className="mr-3 h-6 sm:h-9" alt="Erato Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ERATÓ</span>
  </a>
  <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
      <svg className="w-5 h-5 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="hidden relative md:block">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block p-2 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
    <button onClick={()=>setBtnNav(!btnNav)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
    <div className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${btnNav ? 'hidden' : ''}`} id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>
      <ul className="flex flex-col p-2 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
        <li>
          <Link href="/">
          <a  className="block py-2 pr-4 pl-3  rounded   md:p-2 hover:bg-gray-400 focus:bg-gray-400" aria-current="page">Academia</a>
          </Link>
        </li>
        <li>
          <Link href="/cursos">
          <a  className="block py-2 pr-4 pl-3  rounded   md:p-2 hover:bg-gray-400 focus:bg-gray-400" aria-current="page">Cursos</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
          <a  className="block py-2 pr-4 pl-3  rounded   md:p-2 hover:bg-gray-400 focus:bg-gray-400" aria-current="page">Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
          <a  className="block py-2 pr-4 pl-3  rounded   md:p-2 hover:bg-gray-400 focus:bg-gray-400" aria-current="page">Conacto</a>
          </Link>
        </li>
        {/* <li>
          <a href="#" className="block py-2 pr-4 pl-3  rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 dark:hover:bg-gray-700 dark:hover:text-red  md:dark:hover:bg-transparent dark:border-gray-700">Cursos</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nosotros</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nosotros</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navb