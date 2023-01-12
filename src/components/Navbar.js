import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    // <>
    //   <nav className={navbar? "px-8 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-black" :"px-8 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-transparent" }>
    //     <div className="container flex flex-wrap items-center justify-between mx-auto lg:px-32">
    //       <a href="#" className=" w-12 rounded-full">
    //         <img
    //           src="images/logo.jpg"
    //           classNameName=" h-2 rounded-full"
    //           alt="Flowbite Logo"
    //         />
    //         {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //           Hemant Arts
    //         </span> */}
    //       </a>
    //       <div className="flex md:order-2">

    //         <button
    //           data-collapse-toggle="navbar-sticky"
    //           type="button"
    //           className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           aria-controls="navbar-sticky"
    //           aria-expanded="true"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className="w-6 h-6"
    //             aria-hidden="true"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //         </button>
    //       </div>
    //       <div
    //         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //         id="navbar-sticky"
    //       >
    //         <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-transperent ">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
    //               aria-current="page"
    //             >
    //               Gallary
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
    //               aria-current="page"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //           {/* <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Contact
    //             </a>
    //           </li>*/}
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <nav className={navbar? "lg:px-32 px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-black" :"lg:px-32 px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-transparent" }>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex">
          <img
            src="images/logo.jpg"
            className=" h-10 rounded-full"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none"
                aria-current="page"
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Gallary
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
