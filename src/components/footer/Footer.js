import React from 'react'

const Footer = () => {
  return (
    
<footer className="p-4 bg-[#181818]">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a  className="flex items-center">
                <img src="https://res.cloudinary.com/edwin3002/image/upload/v1664576091/Erato/logo-2_rtfwrr.png" className="mr-3 h-8" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Erató</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a  className="hover:underline">Servicio al cliente: 30257324943</a>
                    </li>
                    <li className="mb-4">
                        <a  className="hover:underline">Carrera 112a 75d-20, Bogotá - Colombia</a>
                    </li>
                    <li className="mb-4">
                        <a  className="hover:underline">arteserato@gmail.com
</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Redes</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://www.facebook.com/AAErato" target='_blank' className="hover:underline ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aaerato/?hl=en"  target='_blank' className="hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 m-auto">© 2022 <a href="https://flowbite.com/" className="hover:underline">Erato™</a>. All Rights Reserved.
        </span>
        
    </div>
</footer>

  )
}

export default Footer