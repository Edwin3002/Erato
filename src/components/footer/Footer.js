import React from 'react'

const Footer = () => {
  return (
    
<footer class="p-4 bg-[#181818]">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a  class="flex items-center">
                <img src="https://res.cloudinary.com/edwin3002/image/upload/v1664576091/Erato/logo-2_rtfwrr.png" class="mr-3 h-8" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Erató</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
                <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a  class="hover:underline">Servicio al cliente: 30257324943</a>
                    </li>
                    <li class="mb-4">
                        <a  class="hover:underline">Carrera 112a 75d-20, Bogotá - Colombia</a>
                    </li>
                    <li class="mb-4">
                        <a  class="hover:underline">arteserato@gmail.com
</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Redes</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://www.facebook.com/AAErato" target='_blank' class="hover:underline ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aaerato/?hl=en"  target='_blank' class="hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center ">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 m-auto">© 2022 <a href="https://flowbite.com/" class="hover:underline">Erato™</a>. All Rights Reserved.
        </span>
        
    </div>
</footer>

  )
}

export default Footer