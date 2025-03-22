import React from 'react'

export default function Footer() {
  return (
   

<footer class="bg-white rounded-lg shadow-sm dark:bg-gray-800 m-4  border border-gray-400   dark:border-none  ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl  whitespace-nowrap bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:bg- dark:from-yellow-500 dark:to-red-500 cursor-pointer">CodeSync</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 gap-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            
                    <li class="mb-4">
                          <a href="https://github.com/bhagwan8815" class="hover:underline ">Github</a>
                      </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">CodeSync™</a>. All Rights Reserved. developed by B.S.Patidar❤️</span>
    </div>
</footer>


  )
}
