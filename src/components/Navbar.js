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
