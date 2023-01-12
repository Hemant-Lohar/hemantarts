import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggler, settoggler] = useState(false);

  const toggle = () => settoggler(!toggler);
  console.log(toggler);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    // <nav
    //   className={
    //     navbar
    //       ? "lg:px-32 px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-black"
    //       : "lg:px-32 px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-black"
    //   }
    // >
    //   <div className="container mx-auto flex flex-wrap items-center justify-between">
    //     <a href="/" className="flex">
    //       <img
    //         src="images/logo.jpg"
    //         className=" h-10 rounded-full"
    //         alt="Flowbite Logo"
    //       />
    //     </a>
    //     <button
    //       onClick={toggle}
    //       data-collapse-toggle="mobile-menu"
    //       type="button"
    //       className="md:hidden text-white ml-3 text-whitefocus:outline-none focus:ring-2 rounded-lg inline-flex items-center justify-center"
    //       aria-controls="mobile-menu-2"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-6 h-6"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //       <svg
    //         className="hidden w-6 h-6"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     {toggle ? (<div className=" block md:hidden  w-full md:w-auto">
    //       <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
    //         <li>
    //           <a
    //             href="/"
    //             className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-indigo-400 md:p-0 rounded focus:outline-none"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             href="/gallary"
    //             className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0 "
    //           >
    //             Gallary
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0"
    //           >
    //             Pricing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>): null}
    //     <div className="hidden md:block w-full md:w-auto">
    //       <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
    //   <li>
    //     <a
    //       href="/"
    //       className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-indigo-400 md:p-0 rounded focus:outline-none"
    //       aria-current="page"
    //     >
    //       Home
    //     </a>
    //   </li>

    //   <li>
    //     <a
    //       href="/gallary"
    //       className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0 "
    //     >
    //       Gallary
    //     </a>
    //   </li>
    //   <li>
    //     <a
    //       href="#"
    //       className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0"
    //     >
    //       Pricing
    //     </a>
    //   </li>
    //   <li>
    //     <a
    //       href="#"
    //       className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0"
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
    //     </div>
    //   </div>
    // </nav>

    <div className="flex items-center justify-between  py-4 px-8 lg:px-32 bg-black">
      <a href="/" className="flex">
        <img
          src="images/logo.jpg"
          className=" h-10 rounded-full"
          alt="Flowbite Logo"
        />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => settoggler((prev) => !prev)}
          >
            <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={toggler ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => settoggler(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b  my-8 text-indigo-600 ">
                <a href="/">Home</a>
              </li>
              <li className="border-b  my-8 text-indigo-600">
                <a href="/gallary">Gallary</a>
              </li>
              <li className="border-b  my-8 text-indigo-600">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-indigo-400 md:p-0 rounded focus:outline-none"
              aria-current="page"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/gallary"
              className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0 "
            >
              Gallary
            </a>
          </li>
         
          <li>
            <a
              href="/contact"
              className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-indigo-400 md:p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
    </div>
  );
};

export default Navbar;
